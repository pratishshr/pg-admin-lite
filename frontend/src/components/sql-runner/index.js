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
import QueryResult from './query-result';

//actions
import {tableActions, queryActions} from '../../actions';

class SqlRunner extends Component {
  render() {
    let props = this.props;
    return (
      <div className="col s12 m8 l9">
        {/*if database is selected show queryEditor else show message */}
        {(props.selectedDatabase) ?
          <div className="container">
            <h5>
              <i className="fa fa-database" aria-hidden="true"></i>
              <span className="margin-left-10">Database: {props.selectedDatabase}</span>
            </h5>
            <SqlEditor {...props}/>

            {/* show result of query only after it is executed;
              * if 'SELECT' command then show table;
              * else show alert */}
            {(props.queryResponse.command === 'SELECT') ?
              <QueryResult {...props}/>
              :
              <div>
                {props.command}
              </div>
            }

            {/* if table is not selected, show database relation 
              * else show table */}
            {(!props.selectedTable) ?
              <Relations {...props}/>
              :
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
    //selectReducer
    selectedDatabase: state.selectReducer.get('selectedDatabase'),
    selectedTable: state.selectReducer.get('selectedTable'),
    //tableReducer
    tablesByDatabase: state.tableReducer.get('tablesByDatabase'),
    resultSet: state.tableReducer.get('resultSet'),
    isFetchingTables: state.tableReducer.get('isFetching'),
    fieldsByTable: state.tableReducer.get('fieldsByTable'),
    //queryReducer
    queryResponse: state.queryReducer.get('queryResponse'),
    isFetchingQueryResult: state.queryReducer.get('isFetching') 
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, tableActions, queryActions), dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SqlRunner);