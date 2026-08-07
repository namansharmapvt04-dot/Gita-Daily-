// Run this on a schedule (e.g. every 5 minutes via node-cron, or an external cron hitting
// a protected endpoint). Keeping this OFF the request path is what makes the leaderboard
// screen cheap even with 1000+ concurrent viewers.
require('dotenv').config();
const pool = require('../config/db');

async function computeSnapshot() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('TRUNCATE leaderboard_snapshot');

    // Global - most read
    await client.query(`
      INSERT INTO leaderboard_snapshot (scope, scope_value, metric_type, user_id, rank, metric_value)
      SELECT 'global', NULL, 'most_read', id, RANK() OVER (ORDER BY total_parts_completed DESC), total_parts_completed
      FROM users WHERE total_parts_completed > 0
    `);

    // Global - consistency
    await client.query(`
      INSERT INTO leaderboard_snapshot (scope, scope_value, metric_type, user_id, rank, metric_value)
      SELECT 'global', NULL, 'consistency', id, RANK() OVER (ORDER BY streak_count DESC), streak_count
      FROM users WHERE streak_count > 0
    `);

    // City - most read (grouped by each state's main_city)
    await client.query(`
      INSERT INTO leaderboard_snapshot (scope, scope_value, metric_type, user_id, rank, metric_value)
      SELECT 'city', s.main_city, 'most_read', u.id,
             RANK() OVER (PARTITION BY s.main_city ORDER BY u.total_parts_completed DESC),
             u.total_parts_completed
      FROM users u JOIN states s ON s.id = u.state_id
      WHERE u.total_parts_completed > 0
    `);

    // City - consistency
    await client.query(`
      INSERT INTO leaderboard_snapshot (scope, scope_value, metric_type, user_id, rank, metric_value)
      SELECT 'city', s.main_city, 'consistency', u.id,
             RANK() OVER (PARTITION BY s.main_city ORDER BY u.streak_count DESC),
             u.streak_count
      FROM users u JOIN states s ON s.id = u.state_id
      WHERE u.streak_count > 0
    `);

    await client.query('COMMIT');
    console.log('Leaderboard snapshot recomputed at', new Date().toISOString());
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Leaderboard computation failed:', err);
  } finally {
    client.release();
  }
}

if (require.main === module) {
  computeSnapshot().then(() => pool.end());
}

module.exports = computeSnapshot;
