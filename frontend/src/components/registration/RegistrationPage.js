import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-4 col-md-4">
          <RegistrationForm />
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
