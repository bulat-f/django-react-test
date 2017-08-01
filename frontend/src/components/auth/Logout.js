import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class Logout extends Component {
  render() {
    return (
      <a
        className="btn btn-danger"
        onClick={() => { this.props.logout() }}
      >
        Logout
      </a>
    )
  }
}

export default connect(null, { logout })(Logout);
