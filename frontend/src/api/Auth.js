import ApiV1 from './ApiV1';

class Auth extends ApiV1 {
  static login(username, password) {
    return super.request('auth', { username, password });
  }
}

export default Auth;
