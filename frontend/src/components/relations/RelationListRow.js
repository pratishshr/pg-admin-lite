/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

class RelationListRow extends Component {
  render() {
    let props = this.props;
    return (
      <tr>
        <td>{props.tableRow.schemaname}</td>
        <td>{props.tableRow.tablename}</td>
        <td>{props.tableRow.tableowner}</td>
      </tr>
    )
  }
}

export default RelationListRow;