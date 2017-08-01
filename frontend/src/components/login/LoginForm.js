import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import './LoginForm.scss';
import FormErrors from '../shared/FormErrors';
import InputWithValidation from '../shared/InputWithValidation';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    const { username, password } = this.state;
    e.preventDefault();
    this.props.login(username, password);
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
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.account.errors
})

export default connect(mapStateToProps, { login })(LoginForm);
