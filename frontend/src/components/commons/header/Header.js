/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

// Redux dependencies
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Libraries
import {browserHistory} from 'react-router';

// Utils 
import {storage} from '../../../utils';

// Actions
import {selectActions} from '../../../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    storage.clear();
    browserHistory.push('/auth');
    this.props.actions.clearSelectedDatabase();
    this.props.actions.clearSelectedTable();
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

let mapStateToProps = (state) => {
  return {
    // NOTE: Add state here later if needed
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign({}, selectActions), dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);