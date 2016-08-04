/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Link</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Link</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;