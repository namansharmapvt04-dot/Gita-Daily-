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

// POST /users - create a user from onboarding
router.post('/', async (req, res) => {
  const { name, email, preferredLanguage, stateId, dailyPace } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO users (name, email, preferred_language, state_id, daily_pace)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, preferred_language, state_id, daily_pace, streak_count, total_score`,
      [name, email, preferredLanguage, stateId, dailyPace]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('POST /users error:', err);
    res.status(500).json({ error: 'Failed to create user' });
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