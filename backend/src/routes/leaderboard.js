const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET /leaderboard?scope=city&scopeValue=Bengaluru&metric=most_read
// Reads from the precomputed leaderboard_snapshot table - NOT a live aggregate query.
// This is the key scalability decision: 1000 concurrent users viewing the leaderboard
// all hit a simple indexed SELECT, not 1000 expensive GROUP BY + ORDER BY scans.
router.get('/', async (req, res) => {
  const { scope = 'global', scopeValue = null, metric = 'most_read' } = req.query;
  try {
    const result = await pool.query(
      `SELECT ls.rank, ls.metric_value, u.name, u.state_id, s.main_city
       FROM leaderboard_snapshot ls
       JOIN users u ON u.id = ls.user_id
       LEFT JOIN states s ON s.id = u.state_id
       WHERE ls.scope = $1
         AND ls.scope_value IS NOT DISTINCT FROM $2
         AND ls.metric_type = $3
       ORDER BY ls.rank ASC
       LIMIT 100`,
      [scope, scopeValue, metric]
    );
    res.json({ scope, scopeValue, metric, results: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load leaderboard' });
  }
});

// GET /leaderboard/me/:userId - a user's own rank on both metrics, both scopes
router.get('/me/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      `SELECT scope, scope_value, metric_type, rank FROM leaderboard_snapshot WHERE user_id = $1`,
      [userId]
    );
    res.json({ ranks: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load user rank' });
  }
});

module.exports = router;
