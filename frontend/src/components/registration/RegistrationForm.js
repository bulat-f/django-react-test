import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../actions';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.registration(this.state);
  }


  render() {
    return (
      <div className="form-box">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Login"
              value={this.state.username}
              onChange={event => this.setState({ username: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={event => this.setState({ first_name: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={event => this.setState({ last_name: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password Confirmation"
              value={this.state.password_confirmation}
              onChange={event => this.setState({ password_confirmation: event.target.value })}
            />
          </div>
          <button
            type="submit"
            className="btn btn-default"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { registration })(RegistrationForm);
