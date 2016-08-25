/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/2/16.
 */

import React, {Component} from 'react';

// Components 
import Sidebar from './sidebar';
import TabBar from './commons/tabbar/TabBar';
import Header from './commons/header/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <Header/>
            <Sidebar {...this.props}/>
            <div className="col s12 m12 l9 offset-l3">
              <TabBar/>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;