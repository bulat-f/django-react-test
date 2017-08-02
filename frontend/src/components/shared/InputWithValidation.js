import React from 'react';

const InputWithValidation = (props) => {
  const { value, type, placeholder, onChange, errors } = props;
  const classNames = `form-group ${!!errors ? 'has-error' : null}`;
  return (
    <div className={classNames}>
      <input
        type={type || 'text'}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event)}
      />
      {errors && errors.map((message, index) =>
        (
          <span key={index} className="help-block">
            {message}
          </span>
        )
      )}
    </div>
  )
}

export default InputWithValidation;
