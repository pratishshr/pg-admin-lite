/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

//constants
import actionTypeConstants from '../constants/actionTypeConstants';

//libraries
import Immutable from 'immutable';

let initialState = Immutable.Map({
  isFetching: false,
  queryResponse: {}
});

export default function queryReducer(state = initialState, action) {
  switch(action.type){
    case actionTypeConstants.REQUEST_EXECUTE_QUERY:
      return state.set('isFetching', true);

    case actionTypeConstants.RESPONSE_EXECUTE_QUERY:
      return state.set('isFetching', false);

    case actionTypeConstants.CLEAR_QUERY_RESPONSE:
      return state.set('queryResponse', {});

    case actionTypeConstants.SAVE_RESULT_SET_FROM_QUERY:
      return state.set('databaseName', action.databaseName)
                  .set('queryResponse', action.data);

    default:
      return state;
  }
}