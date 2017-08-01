import React, { Component } from 'react';
import Logout from '../auth/Logout';

class DashboardPage extends Component {
  render() {
    return (
      <div className="row">
        <h1>DashboardPage</h1>
        <Logout />
      </div>
    )
  }
}

export default DashboardPage;
