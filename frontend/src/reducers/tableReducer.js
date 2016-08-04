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
  tables: Immutable.Map({})
});

export default function databaseReducer(state = initialState, action) {
  switch(action.type){
    case actionTypeConstants.LIST_TABLES:
      return state.setIn(['tables', action.dbName], action.data);

    default:
      return state;
  }
}