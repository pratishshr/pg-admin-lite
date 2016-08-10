/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import React, {Component} from 'react';

//components
import Header from './commons/header/Header';
import Sidebar from './sidebar';
import SqlRunner from './sql-runner';
import Login from './login/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.changeLoggedInStatus = this.changeLoggedInStatus.bind(this);
  }

  changeLoggedInStatus(status) {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        {/* TODO: separate different routes and find a more efficient way*/}
        {(this.state.isLoggedIn) ?
          <div>
            <Header />

            <div className="row">
              <Sidebar/>
              <SqlRunner/>
            </div>
          </div>
          :
          <Login changeLoggedInStatus={this.changeLoggedInStatus}/>
        }
      </div>
    )
  }
}

export default App;