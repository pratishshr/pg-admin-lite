/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import React, {Component} from 'react';

//components
import Header from './commons/header/Header';
import Sidebar from './commons/sidebar/Sidebar';
import SqlRunner from './sql-runner';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="row">
          <Sidebar/>
          <SqlRunner/>
        </div>

      </div>
    )
  }
}

export default App;