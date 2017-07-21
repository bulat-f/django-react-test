import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="LoginForm">
        <form>
          <div className="form-group">
            <input
              type="text"
              id="login-form-login"
              className="form-control"
              placeholder="Login"
              value={this.state.login}
              onChange={event => this.setState({ login: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="login-orm-password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
