require('dotenv').config();
const pool = require('../../config/db');

const chapter1 = require('./chapter1');
const chapter2 = require('./chapter2');
const chapter3 = require('./chapter3');
const chapter4 = require('./chapter4');
const chapter5 = require('./chapter5');
const chapter6 = require('./chapter6');
const chapter7 = require('./chapter7');
const chapter8 = require('./chapter8');
const chapter9 = require('./chapter9');
const chapter10 = require('./chapter10');
const chapter11 = require('./chapter11');
const chapter12 = require('./chapter12');
const chapter13 = require('./chapter13');
const chapter14 = require('./chapter14');
const chapter15 = require('./chapter15');
const chapter16 = require('./chapter16');
const chapter17 = require('./chapter17');
const chapter18 = require('./chapter18');

const allChapters = [
  chapter1, chapter2, chapter3, chapter4, chapter5,
  chapter6, chapter7, chapter8, chapter9, chapter10,
  chapter11, chapter12, chapter13, chapter14, chapter15,
  chapter16, chapter17, chapter18,
];

// Upserts explanations.text for every (verse, language) pair found in the seed files,
// matched by (chapter number, verse number) — the natural key on the live `verses` table.
// Does NOT touch chapters/parts/verses/reading_log, so no user progress is affected;
// this is purely additive/updating on the explanations table (safe to re-run any time).
async function main() {
  let updated = 0;
  let missing = 0;

  for (const chapterData of allChapters) {
    for (const part of chapterData.parts) {
      for (const verse of part.verses) {
        for (const [langCode, text] of Object.entries(verse.explanations)) {
          const verseRes = await pool.query(
            `SELECT v.id FROM verses v
             JOIN chapters c ON c.id = v.chapter_id
             WHERE c.number = $1 AND v.verse_number = $2`,
            [chapterData.number, verse.verse_number]
          );
          if (verseRes.rows.length === 0) {
            console.warn(`No verse found for chapter ${chapterData.number} verse ${verse.verse_number} — skipping`);
            missing++;
            continue;
          }
          const verseId = verseRes.rows[0].id;
          await pool.query(
            `INSERT INTO explanations (verse_id, language_code, text)
             VALUES ($1, $2, $3)
             ON CONFLICT (verse_id, language_code) DO UPDATE SET text = EXCLUDED.text`,
            [verseId, langCode, text]
          );
          updated++;
        }
      }
    }
  }
  console.log(`Synced ${updated} explanation rows. ${missing} verses had no matching DB row.`);
}

main()
  .catch((err) => { console.error('Sync failed:', err); process.exitCode = 1; })
  .finally(() => pool.end());
