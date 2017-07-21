import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { user_name, password } = this.state;
    e.preventDefault();
    this.props.login(user_name, password);
  }


  render() {
    return (
      <div className="LoginForm">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="login-form-login"
              className="form-control"
              placeholder="Login"
              value={this.state.user_name}
              onChange={event => this.setState({ user_name: event.target.value })}
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

export default connect(null, { login })(LoginForm);
