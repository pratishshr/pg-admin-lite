/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//components
import SqlEditor from './SqlEditor';
import Relations from '../relations';
import Table from '../table';

//actions
import {tableActions, queryActions} from '../../actions';

class SqlRunner extends Component {
  render() {
    let props = this.props;
    return (
      <div className="col s12 m8 l9">
        {(props.selectedDatabase) ?
          <div className="container">
            <h5>
              <i className="fa fa-database" aria-hidden="true"></i>
              <span className="margin-left-10">Database: {props.selectedDatabase}</span>
            </h5>
            <SqlEditor {...props}/>
            {(!props.selectedTable) ?
              <Relations {...props}/> :
              <Table {...props}/>
            }
          </div>
          :
          <div className="container">
            <h3>Select a database</h3>
          </div>
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    selectedDatabase: state.selectReducer.get('selectedDatabase'),
    selectedTable: state.selectReducer.get('selectedTable'),
    tablesByDatabase: state.tableReducer.get('tablesByDatabase'),
    resultSet: state.tableReducer.get('resultSet'),
    isFetchingTables: state.tableReducer.get('isFetching'),
    fieldsByTable: state.tableReducer.get('fieldsByTable')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, tableActions, queryActions), dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SqlRunner);