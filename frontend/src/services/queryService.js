/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

/* Utils */
import {httpUtil} from '../utils';

export function executeQuery(query, databaseName) {
  return httpUtil.get(query, databaseName);
}