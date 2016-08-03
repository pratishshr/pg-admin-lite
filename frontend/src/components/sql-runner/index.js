/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

//components
import SqlEditor from './SqlEditor';
import ResultSet from './ResultSet';

class SqlRunner extends Component {
  render() {
    return (
        <div className="col s12 m8 l9">
          <SqlEditor />

          <div className="row">
            <ResultSet />
          </div>

        </div>
    )
  }
}

export default SqlRunner;