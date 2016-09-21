/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

class DbStructureRow extends Component {
  render() {
    let props = this.props;
    return (
      <tr>
        <td>{props.table.schemaname}</td>
        <td>{props.table.tablename}</td>
        <td>{props.table.tableowner}</td>
      </tr>
    )
  }
}

DbStructureRow.propTypes = {
  row: React.PropTypes.array
};

export default DbStructureRow;