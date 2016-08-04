/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import axios from 'axios';

const API_PATH = 'http://localhost:1234/api';
const SQL_RESOURCE = API_PATH + '/query';

export function get(query, dbName = '') {
  return axios({
    method: 'GET',
    url : SQL_RESOURCE + '?sql=' + query.replace(/\s+/g, ' '),
    headers: {
      'db-username': localStorage.getItem('db-username') || '',
      'db-password': localStorage.getItem('db-password') || '',
      'db-name': dbName
    }
  });
}