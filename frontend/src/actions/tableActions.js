/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

/* Constants */
import actionTypeConstants from '../constants/actionTypeConstants';

/* Services */
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

/**
 * Fetch all the tables from a database
 * 
 * @param databaseName
 * @returns {Function}
 */
export function fetchTables(databaseName) {
  return function (dispatch) {
    return tableService.fetchAll(databaseName).then((response) => {
      dispatch(listTables(databaseName, response.data.rows));
    })
  }
}

/**
 * Select all from table;
 *  1. Dispatch a "Request" action to know the async call has started.
 *  2. Dipatch "Save" action to save the resultset.
 *  3. Dispatch a "Response" action to know async call has ended.
 *
 * @param databaseName - Database to fetch data from
 * @param tableName - Table to fetch from the database
 * @returns {Function}
 */
export function selectAllFromTable(databaseName, tableName) {
  return function (dispatch) {
    dispatch(requestTables());
    return tableService.selectAllFromTable(databaseName, tableName).then((response) => {
      dispatch(saveResultSet(tableName, response.data));
      dispatch(responseTables());
    });
  }
}