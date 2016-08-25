/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

// Services 
import * as databaseService from './databaseService';
import * as tableService from './tableService';
import * as queryService from './queryService';

// Single point of export for all services 
export {
  databaseService,
  tableService,
  queryService
}