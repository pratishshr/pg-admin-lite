/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Constants 
import actionTypeConstants from '../constants/actionTypeConstants';

// Libraries 
import Immutable from 'immutable';

let initialState = Immutable.Map({
  selectedDatabase: '',
  selectedTable: ''
});

export default function selectReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypeConstants.SELECT_DATABASE:
      return state.set('selectedDatabase', action.databaseName)
                  .set('selectedTable', '');

    case actionTypeConstants.SELECT_TABLE:
      return state.set('selectedTable', action.tableName);

    case actionTypeConstants.CLEAR_SELECTED_DATABASE:
      return state.set('selectedDatabase', '');

    case actionTypeConstants.CLEAR_SELECTED_TABLE:
      return state.set('selectedTable', '');

    default:
      return state;
  }
}