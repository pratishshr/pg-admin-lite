/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/1/16.
 */
import pg from 'pg';

let pool = new pg.Pool({
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
});

export function executeQuery(query, values = [], cb) {
  pool.connect((err, client, done) => {
    if (err) cb(err);
    client.query(query, values, function (err, result) {
      //call `done()` to release the client back to the pool
      done();
      if (err) cb(err);
      cb(null, result.rows);
    });
  });
}

export function list(cb) {
  let query = `SELECT * FROM pg_database`;
  executeQuery(query, [],  cb);
}

export function filterByName(value, cb) {
  let query = `SELECT * FROM pg_database
               WHERE datname LIKE $1 || '%'`;
  executeQuery(query, [value], cb)
}