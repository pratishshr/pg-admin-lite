/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Constants
import actionTypeConstants from '../constants/actionTypeConstants';

// Services
import {databaseService} from '../services';

export function requestDatabase() {
  return {
    type: actionTypeConstants.REQUEST_DATABASE
  }
}

export function responseDatabase() {
  return {
    type: actionTypeConstants.RESPONSE_DATABASE
  }
}

export function listDatabases(databases) {
  return {
    type: actionTypeConstants.LIST_DATABASES,
    data: databases
  }
}

/**
 *  1. Dispatch a "Request" action to know the async call has started.
 *  2. Dipatch "List" action to list all the databases.
 *  3. Dispatch a "Response" action to know async call has ended.
 *
 * @returns {Function}
 */
export function fetchDatabases() {
  return function (dispatch) {
    dispatch(requestDatabase());
    return databaseService.fetchAll().then((response) => {
      dispatch(listDatabases(response.data.rows));
      dispatch(responseDatabase());
    });
  }
}
