import * as types from '../constants';

const defaultState = {
  user: {
    first_name: '',
    last_name: ''
  },
  isAuthenticated: !!localStorage.getItem('jwt')
}

const account = (state = defaultState, action) => {
  switch (action.type) {
    case types.REGISTRATION_REQUEST:
      return defaultState;

    case types.REGISTRATION_FAILURE:
      return {
        user: null,
        isAuthenticated: false
      }

    case types.LOGIN_REQUEST:
      return defaultState;

    case types.LOGIN_SUCCESS:
      const { user } = action;
      return {
        user,
        isAuthenticated: true
      }

    case types.LOGIN_FAILURE:
      return {
        user: null,
        isAuthenticated: false
      }

    case types.LOGOUT:
      return {
        user: null,
        isAuthenticated: false
      }

    default:
      return state;
  }
}

export default account;
