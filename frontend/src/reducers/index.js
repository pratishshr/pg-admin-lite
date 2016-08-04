/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import {combineReducers} from 'redux';
import databaseReducer from './databaseReducer';
import tableReducer from './tableReducer';
import selectReducer from './selectReducer';

const rootReducer = combineReducers({
  databaseReducer,
  tableReducer,
  selectReducer
});

export default rootReducer; 