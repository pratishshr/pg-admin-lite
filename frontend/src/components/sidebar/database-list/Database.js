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
    //toggle dropdown; fetch and select database when open
    this.state.isOpen = !this.state.isOpen;
    this.setState({isOpen: this.state.isOpen});
    if(this.state.isOpen) {
      this.props.actions.fetchTables(this.props.database.datname);
      this.props.actions.selectDatabase(this.props.database.datname);
    }
  }
  
  render() {
    let database = this.props.database;
    return (
      <li>
        <a className="collapsible-header waves-effect" onClick={this.selectDatabase}>
          <i className="fa fa-database" aria-hidden="true"></i>
          {database.datname}
        </a>
       <TableList dbName={database.datname} {...this.props}/>
      </li>
    )
  }
}

export default Database;