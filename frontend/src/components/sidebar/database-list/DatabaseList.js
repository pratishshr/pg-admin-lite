import React, {Component} from 'react';

//components
import TableList from './../table-list/TableList';
import Database from './Database';

class DatabaseList extends Component {
  render() {
    return (
      <ul className="collapsible collapsible-accordion" data-collapsible="expandable">
        {this.props.databases.map((database, index) => {
          return (
            <Database database={database} key={index} {...this.props}/>
          )
        })}
      </ul>
    )
  }
}

export default DatabaseList;