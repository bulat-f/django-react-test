import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import RegistrationPage from './registration/RegistrationPage';
import LoginPage        from './auth/LoginPage';
import Home             from './home/Home';
import SettingsPage     from './settings/SettingsPage';
import Navbar           from './shared/Navbar';

class App extends Component {
  onlyForAuthenticated(PageComponent) {
    return () => (
      this.props.account.isAuthenticated ? (
        <PageComponent />
      ) : (
        <Redirect to="/login" />
      )
    )
  }

  onlyForNotAuthenticated(PageComponent) {
    return () => (
      this.props.account.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <PageComponent />
      )
    )
  }

  render() {
    const { account: { isAuthenticated, user } } = this.props;
    return (
      <Router>
        <div>
          <Navbar isAuthenticated={isAuthenticated} user={user} />
          <div className="container-fluid">
            <Route exact={true} path="/" component={Home} />
            <Route
              path="/registration"
              render={this.onlyForNotAuthenticated(RegistrationPage)}
            />
            <Route
              path="/login"
              render={this.onlyForNotAuthenticated(LoginPage)}
            />
            <Route
              path="/settings"
              render={this.onlyForAuthenticated(SettingsPage)}
            />
          </div>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  account: state.account
})

export default connect(mapStateToProps, null)(App);
