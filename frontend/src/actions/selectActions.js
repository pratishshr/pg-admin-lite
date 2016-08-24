/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

/* Constants */
import actionTypeConstants from '../constants/actionTypeConstants';

export function selectDatabase(databaseName) {
  return {
    type: actionTypeConstants.SELECT_DATABASE,
    databaseName: databaseName
  }
}

export function selectTable(tableName) {
  return {
    type: actionTypeConstants.SELECT_TABLE,
    tableName: tableName
  }
}

export function clearSelectedDatabase() {
  return {
    type: actionTypeConstants.CLEAR_SELECTED_DATABASE
  }
}

export function clearSelectedTable() {
  return {
    type: actionTypeConstants.CLEAR_SELECTED_TABLE
  }
}
