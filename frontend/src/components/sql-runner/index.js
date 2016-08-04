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
import ResultSet from './ResultSet';

class SqlRunner extends Component {
  render() {
    let props = this.props;
    console.log(props.selectedDatabase);
    return (
        <div className="col s12 m8 l9">
          {(props.selectedDatabase) ?
            <div>
              <div class="row">
                <p>Database: {props.selectedDatabase}</p>
              </div>
              <SqlEditor />
              <div className="row">
                <ResultSet/>
              </div>
            </div>
            :
            <h1>Select a database</h1>
          }
        </div>
    )
  }
}

let mapStateToProps = (state) =>{
  return {
    selectedDatabase: state.selectReducer.get('selectedDatabase'),
    tables: state.tableReducer.get('tables')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SqlRunner);