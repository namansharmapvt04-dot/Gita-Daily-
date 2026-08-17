// Additive-only migration: sets chapters.title_hi for each chapter. Like
// addHindiQuestions.js, this only UPDATEs a single column on existing chapter rows —
// it never touches parts, verses, questions, explanations, or reading_log, so it's
// safe to run against production without affecting real user data.
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

async function addHindiChapterTitles() {
  let updated = 0;

  for (const chapterData of allChapters) {
    if (!chapterData.title_hi) {
      console.warn(`Chapter ${chapterData.number} has no title_hi, skipping.`);
      continue;
    }
    const result = await pool.query(
      `UPDATE chapters SET title_hi = $1 WHERE number = $2`,
      [chapterData.title_hi, chapterData.number]
    );
    if (result.rowCount === 0) {
      console.warn(`Chapter ${chapterData.number} not found in DB, skipping.`);
      continue;
    }
    updated += 1;
  }

  console.log(`Done. Updated title_hi for ${updated} chapters.`);
}

addHindiChapterTitles()
  .catch((err) => {
    console.error('addHindiChapterTitles failed:', err);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
