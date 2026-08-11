// Additive-only migration: inserts Hindi (hi) translations for existing English quiz
// questions. Unlike setup.js, this script NEVER deletes anything — it only inserts or
// updates 'hi' rows, matched by part_id, so it's safe to run against production without
// touching real users' reading_log, verses, explanations, or existing 'en' questions.
require('dotenv').config();
const pool = require('../../config/db');

const allChapters = [
  require('./chapter1'), require('./chapter2'), require('./chapter3'),
  require('./chapter4'), require('./chapter5'), require('./chapter6'),
  require('./chapter7'), require('./chapter8'), require('./chapter9'),
  require('./chapter10'), require('./chapter11'), require('./chapter12'),
  require('./chapter13'), require('./chapter14'), require('./chapter15'),
  require('./chapter16'), require('./chapter17'), require('./chapter18'),
];

async function addHindiQuestions() {
  let inserted = 0;
  let skipped = 0;

  for (const chapterData of allChapters) {
    const chapterRes = await pool.query(`SELECT id FROM chapters WHERE number = $1`, [chapterData.number]);
    if (chapterRes.rows.length === 0) {
      console.warn(`Chapter ${chapterData.number} not found in DB, skipping.`);
      continue;
    }
    const chapterId = chapterRes.rows[0].id;

    for (const part of chapterData.parts) {
      const partRes = await pool.query(
        `SELECT id FROM parts WHERE chapter_id = $1 AND part_number = $2`,
        [chapterId, part.part_number]
      );
      if (partRes.rows.length === 0) {
        console.warn(`Chapter ${chapterData.number} Part ${part.part_number} not found in DB, skipping.`);
        continue;
      }
      const partId = partRes.rows[0].id;

      for (const q of part.questions) {
        if (!q.hi) {
          skipped += 1;
          continue;
        }
        await pool.query(
          `INSERT INTO questions (part_id, language_code, question_text, options, explanation, difficulty)
           VALUES ($1, 'hi', $2, $3, $4, $5)
           ON CONFLICT (part_id, language_code, question_text)
           DO UPDATE SET options = EXCLUDED.options, explanation = EXCLUDED.explanation`,
          [partId, q.hi.question_text, JSON.stringify(q.hi.options), q.hi.explanation, q.difficulty]
        );
        inserted += 1;
      }
    }
  }

  console.log(`Done. Inserted/updated ${inserted} Hindi questions, skipped ${skipped} without translation.`);
}

addHindiQuestions()
  .catch((err) => {
    console.error('addHindiQuestions failed:', err);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
