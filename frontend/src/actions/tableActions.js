/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

//constants
import actionTypeConstants from '../constants/actionTypeConstants';

//services
import {tableService} from '../services';

export function requestTables() {
  return {
    type: actionTypeConstants.REQUEST_TABLES
  }
}

export function responseTables() {
  return {
    type: actionTypeConstants.RESPONSE_TABLES
  }
}

export function listTables(dbName, tables) {
  return {
    type: actionTypeConstants.LIST_TABLES,
    dbName: dbName,
    data: tables
  }
}

//async action creators
export function fetchTables(dbName) {
  return function(dispatch) {
    return tableService.fetchAll(dbName).then((response) => {
      dispatch(listTables(dbName, response.data.rows));
    })
  }
}