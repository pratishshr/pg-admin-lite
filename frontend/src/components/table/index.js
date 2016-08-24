/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

/* Components */
import TableList from './TableList';
import Spinner from '../commons/spinner/Spinner';

class Table extends Component {
  render() {
    let props = this.props;
    return (
      <div >
        <i className="fa fa-table center-align" aria-hidden="true"></i>
        <span className="table-title margin-left-10">Table: {props.selectedTable}</span>

        {/* Show a spinner when it is fetching any tables */}
        {(!props.isFetchingTables) ?
          <TableList columns={props.fieldsByTable.get(props.selectedTable)} resultSet={props.resultSet}/>
          :
          <div className="row center-align">
            <Spinner/>
          </div>
        }
      </div>
    )
  }
}

export default Table;