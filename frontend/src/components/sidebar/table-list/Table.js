/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

// Services 
import {databaseService} from '../../../services/databaseService';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.selectTable = this.selectTable.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  componentDidMount() {
    let props = this.props;
    if (props.location.query.table == props.table.tablename) {
      this.selectTable();
    }
  }

  isSelected() {
    let props = this.props;
    if (props.selectedTable == props.table.tablename) {
      return true;
    }
    return false;
  }

  selectTable() {
    let props = this.props;
    props.actions.selectTable(props.table.tablename);
    props.actions.selectAllFromTable(props.selectedDatabase, props.table.tablename);
  }

  render() {
    let props = this.props;
    return (
      <li className={(this.isSelected())?'active':''}>
        <Link to={`/structure?db=${props.database.datname}&table=${props.table.tablename}`}
              onClick={this.selectTable}>
          <i className="fa fa-table center-align" aria-hidden="true"></i>
          {props.table.tablename}
        </Link>
      </li>
    )
  }
}

export default TableList;