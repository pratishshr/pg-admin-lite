/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

// Components 
import TableRow from './TableRow';

class TableList extends Component {
  render() {
    let props = this.props;
    return (
      <div className="highlight z-depth-1 overflow-x">
        <table className="bordered responsive-table">
          <thead>
          <tr>
            {props.columns && props.columns.map((column, index) => {
              return <th key={index}>{column.name}</th>
            })}
          </tr>
          </thead>
          <tbody>
          {props.resultSet && props.resultSet.map((row, index) => {
            return <TableRow row={row} key={index} index={index}/>
          })}
          {props.resultSet && !props.resultSet.length &&
          <tr>
            <td className="center-align" colSpan={props.columns && props.columns.length}>No rows inserted.</td>
          </tr>
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TableList;