/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import {httpUtil} from '../util';

export function fetchAll(dbName) {
  let query = `SELECT * FROM pg_catalog.pg_tables 
               WHERE schemaname != 'information_schema' AND schemaname != 'pg_catalog'`;
  return httpUtil.get(query, dbName);
}