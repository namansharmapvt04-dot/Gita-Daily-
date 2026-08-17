const express = require('express');
const router = express.Router();
const pool = require('../config/db');

const DONE_MESSAGES = {
  en: 'All available content completed — more chapters coming soon.',
  hi: 'उपलब्ध सारी सामग्री पूर्ण हो चुकी है — और अध्याय जल्द आएंगे।',
};

// GET /content/today/:userId
// Returns the next Part the user hasn't completed yet, with verses + explanations
// in their preferred language, and today's quiz questions.
router.get('/today/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    // Step 1: fetch user language + last completed part in ONE parallel round-trip
    const [userRes, progressRes] = await Promise.all([
      pool.query(`SELECT preferred_language FROM users WHERE id = $1`, [userId]),
      pool.query(
        `SELECT MAX(p.global_order) as max_order
         FROM reading_log rl
         JOIN parts p ON p.id = rl.part_id
         WHERE rl.user_id = $1 AND rl.mode IN ('full', 'quick')`,
        [userId]
      ),
    ]);

    if (userRes.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    const lang = userRes.rows[0].preferred_language;
    const lastOrder = progressRes.rows[0].max_order || 0;

    // Step 2: find the next part
    const partRes = await pool.query(
      `SELECT p.id, p.part_number, p.estimated_minutes, c.number as chapter_number,
              CASE WHEN $2 = 'hi' AND c.title_hi IS NOT NULL THEN c.title_hi ELSE c.title END as chapter_title
       FROM parts p JOIN chapters c ON c.id = p.chapter_id
       WHERE p.global_order > $1
       ORDER BY p.global_order ASC LIMIT 1`,
      [lastOrder, lang]
    );
    if (partRes.rows.length === 0) {
      return res.json({ done: true, message: DONE_MESSAGES[lang] || DONE_MESSAGES.en });
    }
    const part = partRes.rows[0];

    // Step 3: fetch verses + questions in ONE parallel round-trip
    const [versesRes, questionsRes] = await Promise.all([
      pool.query(
        `SELECT v.id, v.verse_number, v.sanskrit, v.transliteration,
                COALESCE(e.text, e_en.text) as explanation,
                (e.text IS NULL) as fell_back_to_english
         FROM verses v
         LEFT JOIN explanations e ON e.verse_id = v.id AND e.language_code = $2
         LEFT JOIN explanations e_en ON e_en.verse_id = v.id AND e_en.language_code = 'en'
         WHERE v.part_id = $1
         ORDER BY v.verse_number ASC`,
        [part.id, lang]
      ),
      pool.query(
        `SELECT id, question_text, options, explanation
         FROM questions WHERE part_id = $1 AND language_code = $2
         UNION ALL
         SELECT id, question_text, options, explanation
         FROM questions WHERE part_id = $1 AND language_code = 'en'
           AND NOT EXISTS (SELECT 1 FROM questions WHERE part_id = $1 AND language_code = $2)`,
        [part.id, lang]
      ),
    ]);

    res.json({
      done: false,
      part: {
        id: part.id,
        chapter_number: part.chapter_number,
        chapter_title: part.chapter_title,
        part_number: part.part_number,
        estimated_minutes: part.estimated_minutes,
      },
      verses: versesRes.rows,
      questions: questionsRes.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load today's content" });
  }
});

// GET /content/progress/:userId
// Returns every part in order, flagged as completed/locked, so the app can render
// a "browse chapters" screen letting users revisit anything they've already read.
router.get('/progress/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const userRes = await pool.query(`SELECT preferred_language FROM users WHERE id = $1`, [userId]);
    if (userRes.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    const lang = userRes.rows[0].preferred_language;

    const result = await pool.query(
      `SELECT p.id, p.part_number, p.global_order, p.estimated_minutes,
              c.number as chapter_number,
              CASE WHEN $2 = 'hi' AND c.title_hi IS NOT NULL THEN c.title_hi ELSE c.title END as chapter_title,
              EXISTS(
                SELECT 1 FROM reading_log rl WHERE rl.user_id = $1 AND rl.part_id = p.id
              ) as completed
       FROM parts p JOIN chapters c ON c.id = p.chapter_id
       ORDER BY p.global_order ASC`,
      [userId, lang]
    );

    const lastCompletedOrder = result.rows
      .filter(r => r.completed)
      .reduce((max, r) => Math.max(max, r.global_order), 0);

    const parts = result.rows.map(r => ({
      ...r,
      locked: !r.completed && r.global_order > lastCompletedOrder + 1,
      isNext: !r.completed && r.global_order === lastCompletedOrder + 1,
    }));

    res.json({ parts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load progress' });
  }
});

// GET /content/part/:partId - fetch any single part's verses/questions directly,
// used for re-reading a completed part (review mode, not tied to "today's" logic).
router.get('/part/:partId', async (req, res) => {
  const { partId } = req.params;
  const lang = req.query.language || 'en';
  try {
    const partRes = await pool.query(
      `SELECT p.id, p.part_number, p.estimated_minutes, c.number as chapter_number,
              CASE WHEN $2 = 'hi' AND c.title_hi IS NOT NULL THEN c.title_hi ELSE c.title END as chapter_title
       FROM parts p JOIN chapters c ON c.id = p.chapter_id WHERE p.id = $1`,
      [partId, lang]
    );
    if (partRes.rows.length === 0) return res.status(404).json({ error: 'Part not found' });
    const part = partRes.rows[0];

    const versesRes = await pool.query(
      `SELECT v.id, v.verse_number, v.sanskrit, v.transliteration,
              COALESCE(e.text, e_en.text) as explanation
       FROM verses v
       LEFT JOIN explanations e ON e.verse_id = v.id AND e.language_code = $2
       LEFT JOIN explanations e_en ON e_en.verse_id = v.id AND e_en.language_code = 'en'
       WHERE v.part_id = $1
       ORDER BY v.verse_number ASC`,
      [partId, lang]
    );

    res.json({ part, verses: versesRes.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load part' });
  }
});

module.exports = router;