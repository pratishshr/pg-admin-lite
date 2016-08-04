/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';

//components
import Table from './Table';

//services
import {databaseService} from '../../../../services/databaseService';

class TableList extends Component {
  render() {
    let props = this.props;
    return (
      <div className="collapsible-body">
        <ul>
          {(false) ?
            props.tables.get(props.dbName).map((table, index) => {
              return <Table table={table} key={index}/>
            }) :
            <Spinner />
          }
        </ul>
      </div>
    )
  }
}

export default TableList;