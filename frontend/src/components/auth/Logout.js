import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions';

class Logout extends Component {
  render() {
    const { className } = this.props;
    return (
      <a
        href="#"
        className={className}
        onClick={() => { this.props.logout() }}
      >
        Logout
      </a>
    )
  }
}

export default connect(null, { logout })(Logout);
