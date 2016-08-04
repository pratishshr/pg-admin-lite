/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

//constants
import actionTypeConstants from '../constants/actionTypeConstants';

//services
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

//async action creators
export function fetchDatabases() {
  return function (dispatch) {
    dispatch(requestDatabase());
    return databaseService.fetchAll().then((response) => {
      dispatch(listDatabases(response.data.rows));
      dispatch(responseDatabase());
    });
  }
}
