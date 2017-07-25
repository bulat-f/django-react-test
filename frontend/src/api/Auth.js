import fetch from 'isomorphic-fetch';
import Cookies from 'universal-cookie';

class Auth {
  static login(username, password) {
    const cookies = new Cookies();
    const csrftoken = cookies.get('csrftoken');

    const path = '/api/v1/auth/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({ username, password })
    };

    return fetch(this.url(path), options);
  }

  static url(path) {
    return `http://localhost:8000${path}`
  }
}

export default Auth;
