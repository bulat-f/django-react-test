import React from 'react';
import { connect } from 'react-redux';
import LandingPage   from './LandingPage';
import DashboardPage from './DashboardPage';

const Home = (props) => {
  const { isAuthenticated } = props;
  return (
    isAuthenticated ? (
      <DashboardPage />
    ) : (
      <LandingPage />
    )
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToProps, null)(Home);
