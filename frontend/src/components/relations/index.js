/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

//components
import RelationList from './RelationList';

class Relations extends Component {
  render() {
    let props = this.props;
    return (
      <div>
        <span className="table-title">List of relations</span>
        <RelationList tableRows={props.tablesByDatabase.get(props.selectedDatabase)}/>
      </div>
    )
  }
}

export default Relations;