import * as types from '../constants';

const defaultState = {
  user: JSON.parse(localStorage.getItem('current_user')),
  isAuthenticated: !!localStorage.getItem('jwt'),
  errors: null
}

const account = (state = defaultState, action) => {
  switch (action.type) {
    case types.REGISTRATION_REQUEST:
    case types.LOGIN_REQUEST:
      return defaultState;

    case types.REGISTRATION_FAILURE:
      return {
        user: null,
        isAuthenticated: false,
        errors: action.errors
      }

    case types.LOGIN_SUCCESS:
      return {
        user: {
          username: action.username,
          first_name: action.first_name,
          last_name: action.last_name
        },
        isAuthenticated: true,
        errors: null
      }

    case types.LOGIN_FAILURE:
      return {
        user: null,
        isAuthenticated: false,
        errors: action.errors
      }

    case types.LOGOUT:
      return {
        user: null,
        isAuthenticated: false,
        errors: null
      }

    default:
      return state;
  }
}

export default account;
