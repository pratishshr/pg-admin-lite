/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

/* Constants */
import actionTypeConstants from '../constants/actionTypeConstants';

/* Services */
import {queryService} from '../services';

/* Actions */
import * as tableActions from './tableActions';

export function requestExecuteQuery() {
  return {
    type: actionTypeConstants.REQUEST_EXECUTE_QUERY
  }
}

export function responseExecuteQuery() {
  return {
    type: actionTypeConstants.RESPONSE_EXECUTE_QUERY
  }
}

export function saveResultSet(databaseName, data) {
  return {
    type: actionTypeConstants.SAVE_RESULT_SET_FROM_QUERY,
    databaseName: databaseName,
    data: data
  }
}

/**
 *  1. Dispatch a "Request" action to know the async call has started.
 *  2. Dipatch appropriate actions as per the response.
 *  3. Dispatch a "Response" action to know async call has ended.
 *
 * @param {String} query - Query to be executed
 * @param {String} databaseName - Name of the database to execute query on
 * @returns {Function}
 */
export function executeQuery(query, databaseName) {
  return function (dispatch) {
    dispatch(requestExecuteQuery());
    return queryService.executeQuery(query, databaseName).then((response) => {
      _handleQueryResponse(dispatch, databaseName, response);
      dispatch(responseExecuteQuery());
    }).catch((response) => {
      Materialize.toast('ERROR: Please check the query', 5000, 'rounded');
    });
  }
}

/**
 * Private function to dispatch appropriate actions as per the response
 *
 * @param dispatch - Function to dispatch an action
 * @param databaseName - Name of the database
 * @param response - Response from async call
 * @private
 */
function _handleQueryResponse(dispatch, databaseName, response) {
  switch (response.data.command) {
    case 'CREATE':
    case 'ALTER':
    case 'DROP':
      dispatch(tableActions.fetchTables(databaseName));
      Materialize.toast('Successfully executed command ' + '"' + response.data.command + '"', 5000, 'rounded');
      break;

    case 'SELECT':
      dispatch(saveResultSet(databaseName, response.data));
      break;

    case 'INSERT':
    case 'UPDATE':
      Materialize.toast(response.data.command + ' ' + response.data.rowCount + ' ROW(s)', 5000, 'rounded');
      break;

    default:
      /* TODO: Handle it properly  */
      console.log(response.command);
  }
}
