/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

// Redux dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Components
import DatabaseList from './database-list/DatabaseList';

// Actions 
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
      <ul id="slide-out" className="side-nav fixed">
        <li>
          <div className="logo-wrapper valign-wrapper">
            <img src="../../assets/img/logo.png" className="logo"/>
            <span className="valign center-align logo-title">pg-Admin</span>
          </div>
        </li>
        <li className="no-padding">
          <DatabaseList databases={this.props.databases} {...this.props}/>
        </li>
      </ul>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    // databaseReducer 
    databases: state.databaseReducer.get('databases') || [],
    // tableReducer 
    tablesByDatabase: state.tableReducer.get('tablesByDatabase'),
    // selectReducer 
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