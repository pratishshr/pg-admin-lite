import React, {Component} from 'react';

/* Components */
import Database from './Database';

class DatabaseList extends Component {
  render() {
    return (
      <ul className="collapsible collapsible-accordion">
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