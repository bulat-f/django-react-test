import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../shared/Dropdown';
import MenuItem from '../shared/MenuItem';
import Logout from '../auth/Logout';

const DashboardNavbar = (props) => {
  const { user } = props;
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand"> Django + React Test App </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <ul className="nav navbar-nav navbar-right">
            <Dropdown label={user.username}>
              <MenuItem>
                <Link to="/">
                  Settings
                </Link>
              </MenuItem>
              <MenuItem>
                <Logout />
              </MenuItem>
            </Dropdown>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar;
