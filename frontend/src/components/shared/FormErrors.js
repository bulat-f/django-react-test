import React, { Component } from 'react';

class FormErrors extends Component {
  render() {
    const { errors } = this.props;
    if (errors && errors.length > 0) {
      return (
        <div className="alert alert-danger">
          <ul>
            {errors.map((message, index) => {
              return (
                <li key={index}>
                  {message}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }

  }
}

export default FormErrors;
