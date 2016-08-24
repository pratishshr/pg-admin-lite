/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/23/16.
 */

import React, {Component} from 'react';

/* Libraries */
import {Link} from 'react-router';

/* Redux dependencies */
import {connect} from 'react-redux';

class TabBar extends Component {
  render() {
    let disabled = '';
    let activeClassName = 'active';
    if(!this.props.selectedDatabase) {
      disabled = 'disabled';
      activeClassName = '';
    }
    return (
      <div className="row">
        <div className="col s12">
          <ul className={`dynamic-tabs ${disabled}`}>
            <li className="tab col s3"><Link to={`/structure?db=${this.props.selectedDatabase}`} activeClassName={activeClassName}>Structure</Link></li>
            <li className="tab col s3"><Link to={`/sql?db=${this.props.selectedDatabase}`} activeClassName={activeClassName}>SQL</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    /* selectReducer */
    selectedDatabase: state.selectReducer.get('selectedDatabase')
  }
};

export default connect(mapStateToProps,null, null, {pure: false})(TabBar);