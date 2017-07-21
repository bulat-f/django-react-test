import * as types from '../constants';
import Auth from '../api/Auth';

export const requestLogin = () => ({
  type: types.REQUEST_LOGIN
})

export const successLogin = (params) => ({
  type: types.SUCCESS_LOGIN
})

export const login = (user_name, password) => {
  return (dispatch, getState) => {
    dispatch(requestLogin());
    return Auth.login(user_name, password)
      .then(json => {
        console.log(json);
        dispatch(successLogin(json));
      })
  }
}
