/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

/* Libraries */
import {browserHistory} from 'react-router';

/* Utils */
import {storage} from '../../../utils';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  signOut() {
    storage.clear();
    browserHistory.push('/auth')
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li className="menu-option"><a onClick={this.signOut}><i className="fa fa-sign-out"></i> Sign Out </a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;