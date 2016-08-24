/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

/* Redux dependencies */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/* Components */
import SqlEditor from './SqlEditor';
import QueryResult from './query-result';

/* Actions */
import {tableActions, queryActions} from '../../actions';

class SqlRunner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;

    return (
      <div>
        <h5>
          <i className="fa fa-database" aria-hidden="true"></i>
          <span className="margin-left-10">Database: {props.selectedDatabase}</span>
        </h5>
        <SqlEditor {...props}/>
        {
          /* Show the result of the query with respect to the selected database */
          (props.selectedDatabase === props.databaseNameOfQueryResult) ?
            <QueryResult {...props}/>
            :
            null
        }
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    /* selectReducer */
    selectedDatabase: state.selectReducer.get('selectedDatabase'),
    selectedTable: state.selectReducer.get('selectedTable'),
    /* tableReducer */
    tablesByDatabase: state.tableReducer.get('tablesByDatabase'),
    resultSet: state.tableReducer.get('resultSet'),
    isFetchingTables: state.tableReducer.get('isFetching'),
    fieldsByTable: state.tableReducer.get('fieldsByTable'),
    /* queryReducer */
    queryResponse: state.queryReducer.get('queryResponse'),
    isFetchingQueryResult: state.queryReducer.get('isFetching'),
    databaseNameOfQueryResult: state.queryReducer.get('databaseName')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, tableActions, queryActions), dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SqlRunner);