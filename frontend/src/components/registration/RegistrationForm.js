import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../actions';
import FormErrors from '../shared/FormErrors';
import InputWithValidation from '../shared/InputWithValidation';

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
        <FormErrors errors={this.props.errors && this.props.errors.non_field_errors} />
        <form onSubmit={this.onSubmit}>
          <InputWithValidation
            placeholder="Login"
            value={this.state.username}
            onChange={event => this.setState({ username: event.target.value })}
            errors={this.props.errors && this.props.errors.username}
          />

          <InputWithValidation
            placeholder="First Name"
            value={this.state.first_name}
            onChange={event => this.setState({ first_name: event.target.value })}
            errors={this.props.errors && this.props.errors.first_name}
          />

          <InputWithValidation
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={event => this.setState({ last_name: event.target.value })}
            errors={this.props.errors && this.props.errors.last_name}
          />

          <InputWithValidation
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            errors={this.props.errors && this.props.errors.password}
          />

          <button
            type="submit"
            className="btn btn-default"
          >
            Sign Up
          </button>
          <span>Already have account?</span>
          <Link to="/login" className="btn btn-inline">
            Login
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.account.errors
})

export default connect(mapStateToProps, { registration })(RegistrationForm);
