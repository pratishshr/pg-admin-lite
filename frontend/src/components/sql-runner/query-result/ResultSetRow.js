/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/4/16.
 */

import React, {Component} from 'react';

class ResultSetRow extends Component {
  render() {
    let props = this.props;
    return (
      <tr>
        {props.row && Object.keys(props.row).map((key, index) => {
          return <td key={index}>{props.row[key]}</td>
        })}
      </tr>
    )
  }
}

export default ResultSetRow;