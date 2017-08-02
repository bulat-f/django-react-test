import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../auth/Logout';
import DashboardNavbar from './DashboardNavbar';

class DashboardPage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <DashboardNavbar user={user} />
        <div className="container-fluid">
          <h1>Welcome {user.username}!!!</h1>
          <Logout className="btn btn-danger" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: Object.assign({}, state.account.user)
})

export default connect(mapStateToProps, null)(DashboardPage);
