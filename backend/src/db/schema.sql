-- Gita Daily schema
-- Design notes:
--   * Content tables (chapter/part/verse/explanation/question) are read-heavy and
--     effectively static -> indexed for fast lookups, safe to cache aggressively.
--   * User-write tables (reading_log) are small per-row and append-mostly -> cheap at scale.
--   * Leaderboard is NOT a live aggregate query on every request. It's computed into
--     leaderboard_snapshot on a schedule (e.g. every few minutes) so 1000 concurrent users
--     hitting the leaderboard screen never trigger 1000 expensive GROUP BY queries.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ---------- Geography ----------

CREATE TABLE IF NOT EXISTS states (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,          -- e.g. 'Karnataka'
  main_city TEXT NOT NULL,            -- e.g. 'Bengaluru' -- the only city users are ranked under
  country TEXT NOT NULL DEFAULT 'India'
);

-- ---------- Users ----------

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  google_id TEXT UNIQUE,
  auth_provider TEXT DEFAULT 'email', -- 'email' | 'google' | 'apple' etc
  preferred_language TEXT NOT NULL DEFAULT 'en',   -- ISO-ish code: en, hi, ta, te, bn...
  state_id INT REFERENCES states(id),
  daily_pace TEXT DEFAULT 'medium',   -- 'short' | 'medium' | 'long' -- from onboarding pace question
  streak_count INT NOT NULL DEFAULT 0,
  longest_streak INT NOT NULL DEFAULT 0,
  streak_freezes_remaining INT NOT NULL DEFAULT 2,   -- resets monthly via scheduled job
  total_parts_completed INT NOT NULL DEFAULT 0,
  total_score INT NOT NULL DEFAULT 0,
  last_read_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Column added after the table already existed in production — CREATE TABLE IF NOT EXISTS
-- above won't touch a live table, so this keeps re-running schema.sql idempotent and safe.
ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id TEXT UNIQUE;

CREATE INDEX IF NOT EXISTS idx_users_state ON users(state_id);
CREATE INDEX IF NOT EXISTS idx_users_score ON users(total_score DESC);

-- ---------- Content hierarchy: Chapter -> Part -> Verse ----------

CREATE TABLE IF NOT EXISTS chapters (
  id SERIAL PRIMARY KEY,
  number INT NOT NULL UNIQUE,          -- 1..18
  title TEXT NOT NULL,                 -- localized title handled via chapter_translation if needed later
  total_verses INT NOT NULL
);

CREATE TABLE IF NOT EXISTS parts (
  id SERIAL PRIMARY KEY,
  chapter_id INT NOT NULL REFERENCES chapters(id),
  part_number INT NOT NULL,            -- order within the chapter
  global_order INT NOT NULL UNIQUE,    -- order across the whole Gita, drives "next part" logic
  verse_start INT NOT NULL,
  verse_end INT NOT NULL,
  estimated_minutes NUMERIC(3,1) NOT NULL DEFAULT 4.0
);

CREATE INDEX IF NOT EXISTS idx_parts_chapter ON parts(chapter_id);
CREATE INDEX IF NOT EXISTS idx_parts_order ON parts(global_order);

CREATE TABLE IF NOT EXISTS verses (
  id SERIAL PRIMARY KEY,
  part_id INT NOT NULL REFERENCES parts(id),
  chapter_id INT NOT NULL REFERENCES chapters(id),
  verse_number INT NOT NULL,           -- verse number within the chapter
  sanskrit TEXT NOT NULL,
  transliteration TEXT NOT NULL,
  UNIQUE(chapter_id, verse_number)
);

CREATE INDEX IF NOT EXISTS idx_verses_part ON verses(part_id);

-- Explanations are per-verse, per-language. Base language is generated first;
-- others can be translated from the base (translated_from_base flag) to keep meaning consistent.
CREATE TABLE IF NOT EXISTS explanations (
  id SERIAL PRIMARY KEY,
  verse_id INT NOT NULL REFERENCES verses(id),
  language_code TEXT NOT NULL,
  text TEXT NOT NULL,
  translated_from_base BOOLEAN NOT NULL DEFAULT false,
  generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(verse_id, language_code)
);

CREATE INDEX IF NOT EXISTS idx_explanations_verse_lang ON explanations(verse_id, language_code);

-- Quiz questions are per-part (comprehension of the whole part), per-language.
CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  part_id INT NOT NULL REFERENCES parts(id),
  language_code TEXT NOT NULL,
  question_text TEXT NOT NULL,
  options JSONB NOT NULL,              -- [{text, is_correct}, ...]
  explanation TEXT NOT NULL,           -- shown after the user answers, regardless of right/wrong
  difficulty TEXT DEFAULT 'application', -- 'recall' | 'application' -- we're prioritizing 'application'
  UNIQUE(part_id, language_code, question_text)
);

CREATE INDEX IF NOT EXISTS idx_questions_part_lang ON questions(part_id, language_code);

-- ---------- Reading activity & scoring ----------

CREATE TABLE IF NOT EXISTS reading_log (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  part_id INT NOT NULL REFERENCES parts(id),
  mode TEXT NOT NULL DEFAULT 'full',   -- 'full' (read+quiz) | 'quick' (read only) | 'skip' (streak freeze used)
  quiz_score NUMERIC(4,2),             -- fraction correct, null if mode='quick' or 'skip'
  points_earned INT NOT NULL DEFAULT 0,
  date_read DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, part_id, date_read)  -- prevents double-counting the same part same day
);

CREATE INDEX IF NOT EXISTS idx_reading_log_user_date ON reading_log(user_id, date_read);

-- Precomputed leaderboard, refreshed on a schedule (not on every request).
-- This is what keeps 1000 concurrent leaderboard views cheap.
CREATE TABLE IF NOT EXISTS leaderboard_snapshot (
  id SERIAL PRIMARY KEY,
  scope TEXT NOT NULL,                 -- 'global' | 'city'
  scope_value TEXT,                    -- null for global, city name otherwise
  metric_type TEXT NOT NULL,           -- 'most_read' | 'consistency'
  user_id UUID NOT NULL REFERENCES users(id),
  rank INT NOT NULL,
  metric_value INT NOT NULL,           -- total_parts_completed or streak_count depending on metric_type
  computed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_lookup ON leaderboard_snapshot(scope, scope_value, metric_type, rank);
