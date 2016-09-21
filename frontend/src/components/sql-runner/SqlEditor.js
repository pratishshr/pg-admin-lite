/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

// Libraries
import {browserHistory} from 'react-router';

// Services
import {queryService} from '../../services';

class SqlEditor extends Component {
  constructor(props) {
    super(props);
    this.executeQuery = this.executeQuery.bind(this);
    this.checkCtrlEnter = this.checkCtrlEnter.bind(this);
  }

  componentDidMount() {
    let props = this.props;

    // Check for query in the url
    if (props.location.query.query) {
      this.refs.query.value = props.location.query.query;
      this.executeQuery();
    }
  }

  executeQuery(event) {
    if (event) event.preventDefault();
    let props = this.props;
    let database = props.selectedDatabase || props.location.query.db;
    let query = queryService.sanitizeQuery(this.refs.query.value);
    props.actions.executeQuery(query, database);

    // Store query in the url
    browserHistory.push(`/sql?db=${database}&query=${query}`);
  }

  checkCtrlEnter(e) {
    // Check for ctrl and command enter
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 13) {
      this.executeQuery();
    }
  }

  render() {
    return (
      <form className="sql-editor" onSubmit={this.executeQuery}>
        <div>
          <div className="input-field col s12 z-depth-1">
            <textarea ref="query" id="textarea1"
                      className="materialize-textarea height-120"
                      onKeyDown={this.checkCtrlEnter}>
            </textarea>
          </div>
          <div className="row">
            <button className='execute-btn btn waves-effect waves-light right'
                    type="submit"
                    name="action">
              Execute
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SqlEditor;