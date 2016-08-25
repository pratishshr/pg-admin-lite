/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import {combineReducers} from 'redux';

// Reducers 
import databaseReducer from './databaseReducer';
import tableReducer from './tableReducer';
import selectReducer from './selectReducer';
import queryReducer from './queryReducer';

const rootReducer = combineReducers({
  databaseReducer,
  tableReducer,
  selectReducer,
  queryReducer
});

export default rootReducer; 