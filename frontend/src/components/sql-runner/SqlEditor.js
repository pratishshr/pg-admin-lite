/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

class SqlEditor extends Component {
  constructor(props) {
    super(props);
    this.executeQuery = this.executeQuery.bind(this);
  }

  executeQuery(event) {
    event.preventDefault();
    let props = this.props;
    props.actions.executeQuery(this.refs.query.value, props.selectedDatabase);
  }
  render() {
    return (
      <form className="sql-editor" onSubmit={this.executeQuery}>
        <div>
          <div className="input-field col s12 z-depth-1">
            <textarea ref="query" id="textarea1" className="materialize-textarea"></textarea>
          </div>

          <div className="row">
            <button className="execute-btn btn waves-effect waves-light right" type="submit" name="action">
              Execute
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SqlEditor;