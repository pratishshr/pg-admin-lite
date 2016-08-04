/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */
import React, {Component} from 'react';

//services
import {databaseService} from '../../../../services/databaseService';

class TableList extends Component {
  render() {
    return (
          <li><a className="waves-effect" href="#!">{this.props.table.tablename}</a></li>
    )
  }
}

export default TableList;