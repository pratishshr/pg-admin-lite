/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components
import DatabaseList from './database-list/DatabaseList';

//actions
import {databaseActions, tableActions} from '../../../actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchDatabases();
  }

  render() {
    return (
      <div className="col s12 m4 l3">
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
    databases: state.databaseReducer.get('databases') || [],
    tables: state.tableReducer.get('tables') 
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, databaseActions, tableActions), dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);