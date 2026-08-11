require('dotenv').config();
const pool = require('../../config/db');
const chapter1 = require('./chapter1');

// Chapter 1 in production only has parts 1-5 (verses 1-27) — parts 6-10 (verses 28-47)
// exist in chapter1.js but were never pushed. Unlike setup.js's seedChapter, this does
// NOT delete/reinsert the whole chapter (that would wipe reading_log for parts 1-5,
// which real testers have already completed). This only INSERTs parts that are missing,
// identified by part_number not yet present in the DB — safe to re-run.
async function main() {
  const chapterRes = await pool.query(`SELECT id FROM chapters WHERE number = $1`, [chapter1.number]);
  if (chapterRes.rows.length === 0) throw new Error('Chapter 1 not found in DB');
  const chapterId = chapterRes.rows[0].id;

  const existingRes = await pool.query(
    `SELECT part_number FROM parts WHERE chapter_id = $1`,
    [chapterId]
  );
  const existingPartNumbers = new Set(existingRes.rows.map(r => r.part_number));

  let inserted = 0;
  for (const part of chapter1.parts) {
    if (existingPartNumbers.has(part.part_number)) continue; // already live — skip, don't touch

    const globalOrder = (chapter1.number - 1) * 100 + part.part_number;
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

    console.log(`Inserted part ${part.part_number} (verses ${part.verse_start}-${part.verse_end}), ${part.verses.length} verses.`);
    inserted++;
  }

  console.log(`Done. Inserted ${inserted} new parts. Existing parts (1-${Math.max(...existingPartNumbers)}) untouched.`);
}

main()
  .catch((err) => { console.error('Failed:', err); process.exitCode = 1; })
  .finally(() => pool.end());