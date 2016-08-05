/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

//components
import ResultSetRow from './RelationListRow';

class RelationList extends Component {
  render() {
    let props = this.props;
    return (
      <table className="bordered highlight z-depth-1 responsive-table">
        <thead>
        <tr>
          <th>Schema</th>
          <th>Name</th>
          <th>Owner</th>
        </tr>
        </thead>
        <tbody>
        {props.tableRows && props.tableRows.map((tableRow, index) => {
          return <ResultSetRow tableRow={tableRow} key={index} index={index}/>
        })}
        {props.tableRows && !props.tableRows.length &&
          <tr>
            <td className="center-align" colSpan="3">No Relations Found</td>
          </tr>
        }
        </tbody>
      </table>
    )
  }
}

export default RelationList;