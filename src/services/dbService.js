/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/1/16.
 */
import pg from 'pg';

class DbService {
  constructor(dbConfig) {
    this.pool = new pg.Pool(dbConfig);
  }

  executeQuery(query, values = []) {
    return new Promise((resolve, reject) => {
      this.pool.connect((err, client, done) => {
        if (err) reject(err);
        client.query(query, values, function (err, result) {
          //call `done()` to release the client back to the pool
          done();
          if (err) reject(err);
          resolve(result);
        });
      });
    });
  }
}

export default DbService;
