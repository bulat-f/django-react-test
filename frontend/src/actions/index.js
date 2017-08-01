import * as types from '../constants';
import Auth from '../api/Auth';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
})

export const loginSuccess = (json) => ({
  type: types.LOGIN_SUCCESS,
  token: json.token
})

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
          localStorage.setItem('jwt', json.token);
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
