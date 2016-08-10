/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

//constants
import actionTypeConstants from '../constants/actionTypeConstants';

//services
import {queryService} from '../services';

//actions
import * as tableActions from './tableActions';
import * as databaseActions from './databaseActions';

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
export function executeQuery(query, databaseName) {
  return function (dispatch) {
    dispatch(requestExecuteQuery());
    return queryService.executeQuery(query, databaseName).then((response) => {
      _handleQueryResponse(dispatch, databaseName, response);
      dispatch(responseExecuteQuery());
    }).catch((response) => {
      Materialize.toast('ERROR: Please check the query' , 5000, 'rounded');
    });
  }
}

function _handleQueryResponse(dispatch, databaseName, response) {
  switch(response.data.command) {
    //DDL
    case 'CREATE':
    case 'ALTER':
    case 'DROP':
      dispatch(tableActions.fetchTables(databaseName));
      Materialize.toast('Successfully executed command ' + '"CREATE"' , 5000, 'rounded');
      break;

    case 'SELECT':
      dispatch(saveResultSet(databaseName, response.data));
      break;

    case 'INSERT':
    case 'UPDATE':
      Materialize.toast(response.data.command + ' ' + response.data.rowCount + ' ROW(s)', 5000, 'rounded');
      break;



    default:
      console.log(response.command);
  }
}