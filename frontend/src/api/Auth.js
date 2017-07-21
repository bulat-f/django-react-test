import fetch from 'isomorphic-fetch';

class Auth {
  static login(user_name, password) {
    const path = '/';
    const options = {
      method: 'GET',
    };

    return fetch(this.url(path), options);
  }

  static url(path) {
    return `http://localhost:8000${path}`
  }
}

export default Auth;
