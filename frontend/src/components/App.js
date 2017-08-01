import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import RegistrationPage from './registration/RegistrationPage';
import LoginPage        from './auth/LoginPage';
import HomePage         from './home/HomePage';
import DashboardPage    from './dashboard/DashboardPage';

class App extends Component {
  onlyForAuthenticated(PageComponent) {
    return () => (
      this.props.account.isAuthenticated ? (
        <PageComponent />
      ) : (
        <Redirect to="/" />
      )
    )
  }

  onlyForNotAuthenticated(PageComponent) {
    return () => (
      this.props.account.isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <PageComponent />
      )
    )
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/registration"> Sign Up </Link>
          <Route
            exact={true}
            path="/"
            render={this.onlyForNotAuthenticated(HomePage)}
          />
          <Route
            path="/registration"
            render={this.onlyForNotAuthenticated(RegistrationPage)}
          />
          <Route
            path="/login"
            render={this.onlyForNotAuthenticated(LoginPage)}
          />
          <Route
            path="/dashboard"
            render={this.onlyForAuthenticated(DashboardPage)}
          />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  account: state.account
})

export default connect(mapStateToProps, null)(App);
