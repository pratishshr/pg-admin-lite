/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';

//components
import Table from './Table';
import Spinner from '../../commons/spinner/Spinner';

//services
import {databaseService} from '../../../services/databaseService';

class TableList extends Component {
  render() {
    let props = this.props;
    return (
      <div className="collapsible-body">
        <ul>
          {/* show spinner when it is being fetched */}
          {(props.tablesByDatabase.get(props.dbName)) ?
            props.tablesByDatabase.get(props.dbName).map((table, index) => {
              return <Table table={table} key={index} {...props}/>
            })
            :
            <li className="center-align"><Spinner className="sidebar-spinner"/></li>
          }

          {/*if no relation is present display a Not found message*/}
          {(props.tablesByDatabase.get(props.dbName) && (!props.tablesByDatabase.get(props.dbName).length))?
            <li className="center-align">No relations found</li>: ''
          }
        </ul>
      </div>
    )
  }
}

export default TableList;