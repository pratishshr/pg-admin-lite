/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

class ResultSet extends Component {
  render() {
    return (
      <table className="bordered highlight z-depth-1 centered">
        <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Pratish</td>
          <td>Shrestha</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Anuj</td>
          <td>Joshi</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bishal</td>
          <td>Shrestha</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default ResultSet;