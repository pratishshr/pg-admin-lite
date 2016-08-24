/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

/* Libraries */
import axios from 'axios';

/* Utils */
import * as storage from './storage';

const API_PATH = 'http://localhost:1234/api';
const SQL_RESOURCE = API_PATH + '/query';

/**
 * Perfoms a GET request to the server
 *
 * @param {String} query - SQL query to be executed
 * @param {String} [dbName = ''] - Name of the database to run query on
 * @returns {Promise}
 */
export function get(query, dbName = '') {
  return axios({
    method: 'GET',
    url: SQL_RESOURCE + '?sql=' + query.replace(/\s+/g, ' '),
    headers: {
      'db-username': storage.get('db-username') || '',
      'db-password': storage.get('db-password') || '',
      'db-name': dbName
    }
  });
}