/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/10/16.
 */

import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="valign-wrapper">
        <div className="container valign">
          <div className="row">
            <div className="col s3">
            </div>
            <div className="col s6 z-depth-4">
              <h4 className="center">pg-admin</h4>
              <form className="col s12" onSubmit={this.onSubmitForm}>
                <div className="row">
                  <div clasSName="col s12">
                    <div className="input-field col s12">
                      <input id="username" type="text" className="validate"/>
                      <label for="username">Username</label>
                    </div>
                    <div className="input-field col s12">
                      <input id="password" type="password" className="validate"/>
                      <label for="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                      <button className="btn waves-effect waves-light col s12 app-color" type="submit" name="action">
                        Log In
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;