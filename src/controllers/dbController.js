/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import {dbService} from '../services';

export function list(req, res) {
  dbService.list((err, rows) => {
    if(err)  console.log(err);
    res.send(rows);
  });
}
