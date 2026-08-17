require('dotenv').config();
const fs = require('fs');
const path = require('path');
const pool = require('../config/db');
const states = require('./seed/states');
const chapter1 = require('./seed/chapter1');
const chapter2 = require('./seed/chapter2');
const chapter3 = require('./seed/chapter3');
const chapter4 = require('./seed/chapter4');
const chapter5 = require('./seed/chapter5');
const chapter6 = require('./seed/chapter6');
const chapter7 = require('./seed/chapter7');
const chapter8 = require('./seed/chapter8');
const chapter9 = require('./seed/chapter9');
const chapter10 = require('./seed/chapter10');
const chapter11 = require('./seed/chapter11');
const chapter12 = require('./seed/chapter12');
const chapter13 = require('./seed/chapter13');
const chapter14 = require('./seed/chapter14');
const chapter15 = require('./seed/chapter15');
const chapter16 = require('./seed/chapter16');
const chapter17 = require('./seed/chapter17');
const chapter18 = require('./seed/chapter18');

const allChapters = [
  chapter1, chapter2, chapter3, chapter4, chapter5,
  chapter6, chapter7, chapter8, chapter9, chapter10,
  chapter11, chapter12, chapter13, chapter14, chapter15,
  chapter16, chapter17, chapter18,
];

async function runSchema() {
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  await pool.query(schema);
  console.log('Schema created.');
}

async function seedStates() {
  for (const s of states) {
    await pool.query(
      `INSERT INTO states (name, main_city) VALUES ($1, $2)
       ON CONFLICT (name) DO NOTHING`,
      [s.name, s.main_city]
    );
  }
  console.log(`Seeded ${states.length} states/UTs.`);
}

async function seedChapter(chapterData) {
  const chapterRes = await pool.query(
    `INSERT INTO chapters (number, title, title_hi, total_verses) VALUES ($1, $2, $3, $4)
     ON CONFLICT (number) DO UPDATE SET title = EXCLUDED.title, title_hi = EXCLUDED.title_hi, total_verses = EXCLUDED.total_verses
     RETURNING id`,
    [chapterData.number, chapterData.title, chapterData.title_hi, chapterData.total_verses]
  );
  const chapterId = chapterRes.rows[0].id;

  // Clean up any previously-seeded content for this chapter so this script is safe to
  // re-run. Order matters because of foreign keys: reading_log/questions/explanations
  // depend on parts/verses. (Dev-data reset only - in production this would never run
  // against real user data.)
  await pool.query(
    `DELETE FROM reading_log WHERE part_id IN (SELECT id FROM parts WHERE chapter_id = $1)`,
    [chapterId]
  );
  await pool.query(
    `DELETE FROM questions WHERE part_id IN (SELECT id FROM parts WHERE chapter_id = $1)`,
    [chapterId]
  );
  await pool.query(
    `DELETE FROM explanations WHERE verse_id IN (SELECT id FROM verses WHERE chapter_id = $1)`,
    [chapterId]
  );
  await pool.query(`DELETE FROM verses WHERE chapter_id = $1`, [chapterId]);
  await pool.query(`DELETE FROM parts WHERE chapter_id = $1`, [chapterId]);

  let globalOrder = (chapterData.number - 1) * 100; // leaves room per chapter for ordering

  for (const part of chapterData.parts) {
    globalOrder += 1;
    const partRes = await pool.query(
      `INSERT INTO parts (chapter_id, part_number, global_order, verse_start, verse_end, estimated_minutes)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [chapterId, part.part_number, globalOrder, part.verse_start, part.verse_end, part.estimated_minutes]
    );
    const partId = partRes.rows[0].id;

    for (const verse of part.verses) {
      const verseRes = await pool.query(
        `INSERT INTO verses (part_id, chapter_id, verse_number, sanskrit, transliteration)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id`,
        [partId, chapterId, verse.verse_number, verse.sanskrit, verse.transliteration]
      );
      const verseId = verseRes.rows[0].id;

      for (const [langCode, text] of Object.entries(verse.explanations)) {
        await pool.query(
          `INSERT INTO explanations (verse_id, language_code, text)
           VALUES ($1, $2, $3)
           ON CONFLICT (verse_id, language_code) DO UPDATE SET text = EXCLUDED.text`,
          [verseId, langCode, text]
        );
      }
    }

    for (const q of part.questions) {
      await pool.query(
        `INSERT INTO questions (part_id, language_code, question_text, options, explanation, difficulty)
         VALUES ($1, 'en', $2, $3, $4, $5)
         ON CONFLICT (part_id, language_code, question_text) DO NOTHING`,
        [partId, q.question_text, JSON.stringify(q.options), q.explanation, q.difficulty]
      );
    }
  }
  console.log(`Seeded Chapter ${chapterData.number}: ${chapterData.parts.length} parts, all ${chapterData.total_verses} verses.`);
}

async function main() {
  try {
    await runSchema();
    await seedStates();
    for (const chapterData of allChapters) {
      await seedChapter(chapterData);
    }
    console.log('Database setup complete.');
  } catch (err) {
    console.error('Setup failed:', err);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

main();