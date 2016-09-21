/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 9/13/16.
 */

import React, {Component} from 'react';

// Components 
import DbStructureRow from './DbStructureRow';

class DbStructure extends Component {
  render() {
    let props = this.props;
    return (
      <div className="highlight z-depth-1 overflow-x">
        <table className="bordered responsive-table">
          <thead>
          <tr>
            <th>Schema</th>
            <th>Name</th>
            <th>Owner</th>
          </tr>
          </thead>
          <tbody>
          {props.tables && props.tables.map((table, index) => {
            return <DbStructureRow table={table} key={index} index={index}/>
          })}
          {props.tables && !props.tables.length &&
          <tr>
            <td className="center-align" colSpan="3">No Tables Found.</td>
          </tr>
          }
          </tbody>
        </table>
      </div>
    )
  }
}

DbStructure.propTypes = {
  tables: React.PropTypes.array
};

export default DbStructure;