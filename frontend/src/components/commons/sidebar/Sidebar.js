/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="col s12 m4 l3">
        <ul id="slide-out" className="side-nav fixed">
          <li><h2 className="center-align">Pg-Admin</h2></li>
          <li className="no-padding">
            <ul className="collapsible collapsible-accordion">
              <li>
                <a className="collapsible-header waves-effect">Dropdown</a>
                <div className="collapsible-body">
                  <ul>
                    <li><a className="waves-effect" href="#!">First</a></li>
                    <li><a href="#!">Second</a></li>
                    <li><a href="#!">Third</a></li>
                    <li><a href="#!">Fourth</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar