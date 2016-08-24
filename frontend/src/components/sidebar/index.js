/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

/* Redux dependencies */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* Components */
import DatabaseList from './database-list/DatabaseList';

/* Actions */
import {databaseActions, tableActions, selectActions} from '../../actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchDatabases();
  }

  render() {
    return (
      <div className="col s12 m2 l3">
        <ul id="slide-out" className="side-nav fixed">
          <li><h2 className="center-align">Pg-Admin</h2></li>
          <li className="no-padding">
            <DatabaseList databases={this.props.databases} {...this.props}/>
          </li>
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    /* databaseReducer */
    databases: state.databaseReducer.get('databases') || [],
    /* tableReducer */
    tablesByDatabase: state.tableReducer.get('tablesByDatabase'),
    /* selectReducer */
    selectedDatabase: state.selectReducer.get('selectedDatabase'),
    selectedTable: state.selectReducer.get('selectedTable')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, databaseActions, tableActions, selectActions), dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);