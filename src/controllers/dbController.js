/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import {DbService} from '../services';

export function executeQuery(req, res) {
  let dbService = new DbService({
    user: req.query.username || req.header('db-username'),
    password: req.query.password || req.header('db-password'),
    database: req.query.dbName || req.header('db-name') || 'template1',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
  });
  dbService.executeQuery(req.query.sql).then((rows) => {
    res.json(rows);
  }).catch((err) => {
    res.status(400).json(err);
  })
}
