/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

//constants
import actionTypeConstants from '../constants/actionTypeConstants';

export function selectDatabase(selectedDatabase, tables) {
  return {
    type: actionTypeConstants.SELECT_DATABASE,
    selectedDatabase: selectedDatabase,
  }
}
