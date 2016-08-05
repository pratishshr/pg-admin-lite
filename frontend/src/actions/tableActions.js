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

export function saveResultSet(tableName, data) {
  return {
    type: actionTypeConstants.SAVE_RESULT_SET,
    tableName: tableName,
    data: data
  }
}

//async action creators
export function fetchTables(databaseName) {
  return function(dispatch) {
    return tableService.fetchAll(databaseName).then((response) => {
      dispatch(listTables(databaseName, response.data.rows));
    })
  }
}

export function selectAllFromTable(databaseName, tableName) {
  return function(dispatch) {
    dispatch(requestTables());
    return tableService.selectAllFromTable(databaseName, tableName).then((response) => {
      dispatch(saveResultSet(tableName, response.data));
      dispatch(responseTables());
    });
  }
}