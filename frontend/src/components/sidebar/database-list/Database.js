import React, {Component} from 'react';

//components
import TableList from '../table-list/TableList';

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.selectDatabase = this.selectDatabase.bind(this);
  }

  selectDatabase() {
    let props = this.props;

    // if the same database is clicked again, clear the selected state
    // else fetch the tables and select the database
    if (props.selectedDatabase !== props.database.datname) {
      this.props.actions.fetchTables(this.props.database.datname);
      this.props.actions.selectDatabase(this.props.database.datname);
    } else {
      this.props.actions.clearSelectedDatabase();
      this.props.actions.clearSelectedTable();
    }
  }


  render() {
    let props = this.props;
    return (
      <li>
        <a className="collapsible-header waves-effect" onClick={this.selectDatabase}>
          <i className="fa fa-database" aria-hidden="true"></i>
          {props.database.datname}
        </a>
        <TableList dbName={props.database.datname} {...props}/>
      </li>
    )
  }
}

export default Database;