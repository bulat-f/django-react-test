import ApiV1 from './ApiV1';

class Auth extends ApiV1 {
  static login(username, password) {
    return super.request('auth', { username, password });
  }

  static register(params) {
    const { username, first_name, last_name, password, password_confirmation } = params
    return super.request('registration', {
      username, first_name, last_name, password, password_confirmation
    });
  }
}

export default Auth;
