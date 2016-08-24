/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

/* Constants */
import actionTypeConstants from '../constants/actionTypeConstants';

/* Libraries */
import Immutable from 'immutable';

let initialState = Immutable.Map({
  isFetching: false,
  databases: []
});

export default function databaseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeConstants.LIST_DATABASES:
      return state.set('databases', action.data);

    case actionTypeConstants.LIST_DB_TABLES:
    default:
      return state;
  }
}