const express = require('express');
const router = express.Router();
const pool = require('../config/db');

const NO_STREAK_FREEZES_MESSAGES = {
  en: 'No streak freezes remaining this month',
  hi: 'इस महीने के लिए कोई स्ट्रीक फ्रीज़ शेष नहीं है',
};

// POST /reading/submit
// body: { userId, partId, mode: 'full'|'quick'|'skip', answers: [{questionId, selectedIndex}] }
//
// Scoring model (locked):
//   - +10 points per part completed, uncapped (every part counts - encourages volume)
//   - + up to 5 points per part based on quiz accuracy (comprehension bonus, 'full' mode only)
//   - +2 points per consecutive streak day (separate from part count, rewards consistency)
//   - 'quick' mode: counts toward streak, but NOT toward total_score / leaderboard rank
//   - 'skip' mode: uses a streak_freeze token, preserves streak, no score
router.post('/submit', async (req, res) => {
  const { userId, partId, mode, answers } = req.body;
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const userRes = await client.query(
      `SELECT streak_count, longest_streak, last_read_date, streak_freezes_remaining, preferred_language
       FROM users WHERE id = $1 FOR UPDATE`,
      [userId]
    );
    if (userRes.rows.length === 0) throw { status: 404, message: 'User not found' };
    const user = userRes.rows[0];

    // Determine new streak: continues if last read was yesterday, resets if gap > 1 day,
    // stays same if already read today (shouldn't normally happen due to UNIQUE constraint).
    const today = new Date().toISOString().slice(0, 10);
    let newStreak = user.streak_count;
    if (mode === 'skip') {
      if (user.streak_freezes_remaining <= 0) {
        const message = NO_STREAK_FREEZES_MESSAGES[user.preferred_language] || NO_STREAK_FREEZES_MESSAGES.en;
        throw { status: 400, message };
      }
      await client.query(
        `UPDATE users SET streak_freezes_remaining = streak_freezes_remaining - 1 WHERE id = $1`,
        [userId]
      );
      // streak preserved as-is when using a freeze
    } else {
      const lastRead = user.last_read_date;
      const isConsecutive = lastRead &&
        (new Date(today) - new Date(lastRead)) / (1000 * 60 * 60 * 24) === 1;
      const isSameDay = lastRead === today;
      if (!isSameDay) {
        newStreak = isConsecutive ? user.streak_count + 1 : 1;
      }
    }

    let quizScore = null;
    let comprehensionPoints = 0;
    if (mode === 'full' && answers && answers.length > 0) {
      const questionIds = answers.map(a => a.questionId);
      const questionsRes = await client.query(
        `SELECT id, options FROM questions WHERE id = ANY($1::int[])`,
        [questionIds]
      );
      let correctCount = 0;
      for (const q of questionsRes.rows) {
        const submitted = answers.find(a => a.questionId === q.id);
        const correctIndex = q.options.findIndex(o => o.is_correct);
        if (submitted && submitted.selectedIndex === correctIndex) correctCount++;
      }
      quizScore = questionsRes.rows.length > 0 ? correctCount / questionsRes.rows.length : null;
      comprehensionPoints = Math.round((quizScore || 0) * 5);
    }

    const partPoints = mode === 'skip' ? 0 : (mode === 'quick' ? 0 : 10);
    const streakBonus = mode === 'skip' ? 0 : newStreak * 2 - user.streak_count * 2; // only the delta for today
    const pointsEarned = partPoints + comprehensionPoints + Math.max(streakBonus, 0);

    if (mode !== 'skip') {
      await client.query(
        `INSERT INTO reading_log (user_id, part_id, mode, quiz_score, points_earned, date_read)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (user_id, part_id, date_read) DO NOTHING`,
        [userId, partId, mode, quizScore, pointsEarned, today]
      );
    }

    await client.query(
      `UPDATE users SET
         streak_count = $1,
         longest_streak = GREATEST(longest_streak, $1),
         total_parts_completed = total_parts_completed + $2,
         total_score = total_score + $3,
         last_read_date = $4
       WHERE id = $5`,
      [newStreak, mode === 'full' || mode === 'quick' ? 1 : 0, pointsEarned, today, userId]
    );

    await client.query('COMMIT');

    res.json({
      streak_count: newStreak,
      points_earned: pointsEarned,
      quiz_score: quizScore,
    });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Failed to submit reading' });
  } finally {
    client.release();
  }
});

module.exports = router;
