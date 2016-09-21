/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

// Redux dependencies
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {tableActions} from '../../actions';

// Components
import DbStructure from './DbStructure';
import Table from '../table';

class Structure extends Component {
  render() {
    let props = this.props;
    return (
      <div>
        <h5>
          <i className="fa fa-database" aria-hidden="true"></i>
          <span className="margin-left-10">Database: {props.selectedDatabase}</span>
        </h5>


        { /* Show Table Data if a Table is Selected else Show Database Relations */
          (props.selectedTable) ?
          <div>
            <span className="table-title">
              <i className="fa fa-table center-align" aria-hidden="true"></i> Table: {props.selectedTable}
            </span>
            <Table isFetching={props.isFetchingTables}
                   columns={props.tableQueryResponse.fields}
                   resultSet={props.tableQueryResponse.rows}/>
          </div>
          :
          <div>
            <span className="table-title">List of relations</span>
            <DbStructure tables={props.tablesByDatabase.get(props.selectedDatabase)}/>
          </div>
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    // selectReducer
    selectedDatabase: state.selectReducer.get('selectedDatabase'),
    selectedTable: state.selectReducer.get('selectedTable'),
    // tableReducer
    tablesByDatabase: state.tableReducer.get('tablesByDatabase'),
    resultSet: state.tableReducer.get('resultSet'),
    isFetchingTables: state.tableReducer.get('isFetching'),
    tableQueryResponse: state.tableReducer.get('tableQueryResponse'),
    // queryReducer
    queryResponse: state.queryReducer.get('queryResponse'),
    isFetchingQueryResult: state.queryReducer.get('isFetching'),
    databaseNameOfQueryResult: state.queryReducer.get('databaseName')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, tableActions), dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Structure);