/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

//components
import ResultSetRow from './ResultSetRow';

class ResultSet extends Component {
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
          return <ResultSetRow row={row} key={index} index={index}/>
        })}
        {props.resultSet && !props.resultSet.length &&
        <tr>
          <td className="center-align"colSpan={props.columns && props.columns.length}>No rows inserted.</td>
        </tr>
        }
        </tbody>
      </table>
    )
  }
}

export default ResultSet;