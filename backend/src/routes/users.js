const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET /users/states - powers the state dropdown in onboarding
router.get('/states', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, name, main_city FROM states ORDER BY name ASC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('GET /states error:', err);
    res.status(500).json({ error: 'Failed to load states' });
  }
});

// PATCH /users/:id - save onboarding preferences onto the account created by /auth/google
router.patch('/:id', async (req, res) => {
  const { preferredLanguage, stateId, dailyPace } = req.body;
  try {
    const result = await pool.query(
      `UPDATE users SET preferred_language = $1, state_id = $2, daily_pace = $3
       WHERE id = $4
       RETURNING id, name, preferred_language, state_id, daily_pace, streak_count, total_score`,
      [preferredLanguage, stateId, dailyPace, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('PATCH /users/:id error:', err);
    res.status(500).json({ error: 'Failed to update preferences' });
  }
});

// POST /users/:id/reset-progress - wipe streak/score/history, start reading over from scratch
router.post('/:id/reset-progress', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await client.query(
      `UPDATE users SET
         streak_count = 0, longest_streak = 0,
         total_parts_completed = 0, total_score = 0,
         last_read_date = NULL
       WHERE id = $1
       RETURNING id, name, preferred_language, state_id, daily_pace, streak_count, total_score`,
      [req.params.id]
    );
    if (result.rows.length === 0) {
      await client.query('ROLLBACK');
      return res.status(404).json({ error: 'User not found' });
    }
    await client.query(`DELETE FROM reading_log WHERE user_id = $1`, [req.params.id]);
    await client.query('COMMIT');
    res.json(result.rows[0]);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('POST /users/:id/reset-progress error:', err);
    res.status(500).json({ error: 'Failed to reset progress' });
  } finally {
    client.release();
  }
});

// GET /users/:id - basic profile
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT u.id, u.name, u.preferred_language, u.streak_count, u.longest_streak,
              u.total_parts_completed, u.total_score, u.streak_freezes_remaining, s.main_city
       FROM users u LEFT JOIN states s ON s.id = u.state_id
       WHERE u.id = $1`,
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'User not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('GET /users/:id error:', err);
    res.status(500).json({ error: 'Failed to load user' });
  }
});

module.exports = router;