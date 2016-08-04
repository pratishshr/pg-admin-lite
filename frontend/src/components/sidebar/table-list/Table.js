/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';

//services
import {databaseService} from '../../../services/databaseService';

class TableList extends Component {
  render() {
    return (
          <li>
            <a className="waves-effect">
              <i className="fa fa-table center-align" aria-hidden="true"></i>
              {this.props.table.tablename}
            </a>
          </li>
    )
  }
}

export default TableList;