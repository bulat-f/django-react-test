import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
