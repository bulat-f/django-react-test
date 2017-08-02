import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../auth/Logout';

class DashboardPage extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="row">
        <h1>Welcome {user.username}!!!</h1>
        <Logout />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: Object.assign({}, state.account.user)
})

export default connect(mapStateToProps, null)(DashboardPage);
