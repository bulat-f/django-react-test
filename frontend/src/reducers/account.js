import * as types from '../constants';

const defaultState = {
  user: {
    first_name: '',
    last_name: ''
  },
  jwt: null
}

const account = (state = defaultState, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return defaultState;
    case types.SUCCESS_LOGIN:
      const { user, jwt } = action;
      return {
        user,
        jwt
      }
    default:
      return state;
  }
}

export default account;
