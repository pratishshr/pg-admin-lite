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
    });
  }
}

function _handleQueryResponse(dispatch, databaseName, response) {
  switch(response.data.command) {
    case 'SELECT':
      dispatch(saveResultSet(databaseName, response.data));
      break;

    default:
      dispatch(saveResultSet(databaseName, response.data));
      console.log(response.command);
  }
}