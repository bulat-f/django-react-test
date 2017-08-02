import React, { Component } from 'react';
import HomeNavbar from './HomeNavbar';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNavbar />
        <div className="container-fluid">
          <h1 className="text-center"> Home Page </h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
