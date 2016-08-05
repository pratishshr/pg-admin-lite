/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/3/16.
 */

import React, {Component} from 'react';

class SqlEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="sql-editor" onSubmit={this.executeQuery}>
        <div>
          <div className="input-field col s12 z-depth-1">
            <textarea id="textarea1" className="materialize-textarea"></textarea>
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