/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';

//services
import {databaseService} from '../../../services/databaseService';

class TableList extends Component {
  constructor(props) {
    super(props);
      this.selectTable  = this.selectTable.bind(this);
  }

  selectTable() {
    let props = this.props;
    props.actions.selectTable(props.table.tablename);
    props.actions.selectAllFromTable(props.selectedDatabase, props.table.tablename);
  }
  
  render() {
    let props = this.props;
    return (
          <li>
            <a className="waves-effect" onClick={this.selectTable}>
              <i className="fa fa-table center-align" aria-hidden="true"></i>
              {props.table.tablename}
            </a>
          </li>
    )
  }
}

export default TableList;