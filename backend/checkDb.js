require('dotenv').config();
const pool = require('./src/config/db');

async function checkDb() {
    try {
        // 1. Chapters
        const chapters = await pool.query(
            `SELECT number, title, total_verses FROM chapters ORDER BY number`
        );
        console.log('\n=== CHAPTERS ===');
        console.table(chapters.rows);

        // 2. Parts per chapter
        const parts = await pool.query(
            `SELECT c.number AS chapter, COUNT(p.id) AS parts_count,
              MIN(p.verse_start) AS first_verse, MAX(p.verse_end) AS last_verse
       FROM chapters c
       JOIN parts p ON p.chapter_id = c.id
       GROUP BY c.number ORDER BY c.number`
        );
        console.log('\n=== PARTS SUMMARY ===');
        console.table(parts.rows);

        // 3. Verses per chapter
        const verses = await pool.query(
            `SELECT c.number AS chapter, COUNT(v.id) AS verse_count
       FROM chapters c
       JOIN parts p ON p.chapter_id = c.id
       JOIN verses v ON v.part_id = p.id
       GROUP BY c.number ORDER BY c.number`
        );
        console.log('\n=== VERSES COUNT ===');
        console.table(verses.rows);

        // 4. Explanations per chapter
        const expl = await pool.query(
            `SELECT c.number AS chapter, COUNT(e.id) AS explanation_count
       FROM chapters c
       JOIN parts p ON p.chapter_id = c.id
       JOIN verses v ON v.part_id = p.id
       JOIN explanations e ON e.verse_id = v.id
       GROUP BY c.number ORDER BY c.number`
        );
        console.log('\n=== EXPLANATIONS COUNT ===');
        console.table(expl.rows);

        // 5. Questions per chapter
        const questions = await pool.query(
            `SELECT c.number AS chapter, COUNT(q.id) AS question_count
       FROM chapters c
       JOIN parts p ON p.chapter_id = c.id
       JOIN questions q ON q.part_id = p.id
       GROUP BY c.number ORDER BY c.number`
        );
        console.log('\n=== QUESTIONS COUNT ===');
        console.table(questions.rows);

        // 6. Sample: first verse of Chapter 2
        const sample = await pool.query(
            `SELECT v.verse_number, v.transliteration, e.text AS explanation
       FROM verses v
       JOIN explanations e ON e.verse_id = v.id
       JOIN parts p ON p.id = v.part_id
       JOIN chapters c ON c.id = p.chapter_id
       WHERE c.number = 2 AND v.verse_number = 1`
        );
        console.log('\n=== SAMPLE: Chapter 2 Verse 1 ===');
        console.table(sample.rows);

        console.log('\n✅ DB check complete.');
    } catch (err) {
        console.error('❌ DB check failed:', err.message);
    } finally {
        await pool.end();
    }
}

checkDb();