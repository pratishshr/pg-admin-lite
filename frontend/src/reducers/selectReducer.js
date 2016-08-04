/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

//constants
import actionTypeConstants from '../constants/actionTypeConstants';

//libraries
import Immutable from 'immutable';

let initialState = Immutable.Map({
  selectedDatabase: ''
});

export default function selectReducer(state = initialState, action) {
  switch(action.type){
    case actionTypeConstants.SELECT_DATABASE:
      return state.set('selectedDatabase', action.selectedDatabase);

    default:
      return state;
  }
}