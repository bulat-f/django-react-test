import * as types from '../constants';
import Auth from '../api/Auth';

export const registrationRequest = () => ({
  type: types.REGISTRATION_REQUEST
})

export const registrationError = () => ({
  type: types.REGISTRATION_FAILURE
})

export const registration = (params) => {
  return (dispatch, getState) => {
    dispatch(registrationRequest());
    return Auth.register(params)
      .then(response => response.json())
      .then(json => {
        dispatch(
          json.token ? loginSuccess(json) : registrationError()
        )
      })
  }
}

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
})

export const loginSuccess = (json) => {
  localStorage.setItem('jwt', json.token);
  return {
    type: types.LOGIN_SUCCESS,
    token: json.token
  }
}

export const loginError = () => ({
  type: types.LOGIN_FAILURE
})

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(loginRequest());
    return Auth.login(username, password)
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(loginSuccess(json));
        } else {
          dispatch(loginError());
        }
      })
  }
}

export const logout = () => {
  localStorage.removeItem('jwt');
  return {
    type: types.LOGOUT
  }
}
