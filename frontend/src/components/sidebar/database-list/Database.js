import React, {Component} from 'react';

// Components 
import TableList from '../table-list/TableList';

// Libraries 
import {Link, browserHistory} from 'react-router';

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.selectDatabase = this.selectDatabase.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  componentDidMount() {
    let props = this.props;
    if (props.location.query.db == props.database.datname) {
      this.selectDatabase();
    }
  }

  isSelected() {
    let props = this.props;
    if (props.selectedDatabase == props.database.datname) {
      return true;
    }
    return false;
  }

  selectDatabase() {
    let props = this.props;
    // If the Same Database is Clicked Again, Clear the Selected State
    // Else Fetch the Tables and Select the Database
    if (!this.isSelected()) {
      this.props.actions.fetchTables(this.props.database.datname);
      this.props.actions.selectDatabase(this.props.database.datname);
    } else {
      this.props.actions.clearSelectedDatabase();
      this.props.actions.clearSelectedTable();

      // FIXME: This is a Hack, as React Router's Link Event was Being Called After the BrowserHistory Call
      setTimeout(() => {
        browserHistory.push('/');
      }, 1)
    }
  }

  render() {
    let props = this.props;

    return (
      <li className={(this.isSelected())?'active-db':''}>
        <Link to={`/structure?db=${props.database.datname}`} onClick={this.selectDatabase}>
          <i className="fa fa-database" aria-hidden="true"></i>
          {props.database.datname}
        </Link>
        <TableList dbName={props.database.datname} {...props}/>
      </li>
    )
  }
}

export default Database;