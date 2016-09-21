/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Utils 
import {httpUtil} from '../utils';

export function executeQuery(query, databaseName) {
  return httpUtil.get(query, databaseName);
}

export function sanitizeQuery(query, limit = 10) {
  query = query.replace(';', '');
  let queryWords = query.toLowerCase().split(' ');
  if(!queryWords.includes('limit')) {
    query += ' ' + 'limit' + ' ' + limit
  }

  return query;
}