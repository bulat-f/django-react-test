import * as types from '../constants';

const defaultState = {
  user: {
    first_name: '',
    last_name: ''
  },
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
      const { user } = action;
      return {
        user,
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
