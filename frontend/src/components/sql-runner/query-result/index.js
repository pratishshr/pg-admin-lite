/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

// Components 
import ResultSet from './ResultSet';
import Spinner from '../../commons/spinner/Spinner';

class QueryResult extends Component {
  render() {
    let props = this.props;
    return (
      <div >
        <span className="table-title">Query Result</span>
        {/* Show spinner when it is fetching query data */}
        {(!props.isFetchingQueryResponse) ?
          <ResultSet columns={props.queryResponse.fields} resultSet={props.queryResponse.rows}/>
          :
          <div className="row center-align">
            <Spinner/>
          </div>
        }
      </div>
    )
  }
}

export default QueryResult;