/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

//components
import TableRow from './TableRow';

class TableList extends Component {
  render() {
    let props = this.props;
    return (
      <table className="bordered highlight z-depth-1 responsive-table">
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
        </tbody>
      </table>
    )
  }
}

export default TableList;