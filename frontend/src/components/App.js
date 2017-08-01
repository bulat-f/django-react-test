import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import LoginPage from './login/LoginPage';
import HomePage  from './home/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          <Route exact={true} path="/" component={HomePage} />
          <Route
            path="/login"
            render={() => (
              this.props.account.isAuthenticated ? (
                <Redirect to="/" />
              ) : (
                <LoginPage />
              )
            )}
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
