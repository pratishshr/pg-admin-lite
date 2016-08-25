/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Utils 
import {httpUtil} from '../utils';

export function fetchAll() {
  let query = `SELECT * FROM pg_database
               WHERE datistemplate=false
               ORDER BY datname`;
  return httpUtil.get(query);
}

