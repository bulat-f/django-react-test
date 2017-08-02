import * as types from '../constants';
import Auth from '../api/Auth';

export const registrationRequest = () => ({
  type: types.REGISTRATION_REQUEST
})

export const registrationError = (json) => ({
  type: types.REGISTRATION_FAILURE,
  errors: json
})

export const registration = (params) => {
  return (dispatch, getState) => {
    dispatch(registrationRequest());
    return Auth.register(params)
      .then(response => response.json())
      .then(json => {
        dispatch(
          json.token ? loginSuccess(json) : registrationError(json)
        )
      })
  }
}

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
})

export const loginSuccess = (json) => {
  const { token, username, first_name, last_name } = json;
  const user = { username, first_name, last_name };
  localStorage.setItem('jwt', token);
  localStorage.setItem('current_user', JSON.stringify(user));
  return Object.assign({ type: types.LOGIN_SUCCESS }, user);
}

export const loginError = (json) => ({
  type: types.LOGIN_FAILURE,
  errors: json
})

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    return Auth.login(username, password)
      .then(response => response.json())
      .then(json => {
        dispatch(json.token ? loginSuccess(json) : loginError(json));
      })
  }
}

export const logout = () => {
  localStorage.removeItem('jwt');
  localStorage.removeItem('current_user');
  return {
    type: types.LOGOUT
  }
}
