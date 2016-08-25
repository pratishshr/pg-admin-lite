/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Utils 
import {httpUtil} from '../utils';

export function fetchAll(databaseName) {
  let query = `SELECT * FROM pg_catalog.pg_tables 
               WHERE schemaname != 'information_schema' AND schemaname != 'pg_catalog'
               ORDER BY tablename`;
  return httpUtil.get(query, databaseName);
}

export function selectAllFromTable(databaseName, tableName) {
  let query = `SELECT * FROM ${tableName}`;
  return httpUtil.get(query, databaseName)
}