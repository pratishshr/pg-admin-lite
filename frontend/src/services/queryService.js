/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import {httpUtil} from '../util';

export function executeQuery(query, databaseName) {
  return httpUtil.get(query, databaseName);
}