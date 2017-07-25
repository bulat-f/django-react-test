import fetch from 'isomorphic-fetch';

class ApiV1 {
  static request(ApiMethod, params = {}) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    };

    return fetch(this.url(ApiMethod), options);
  }

  static url(method) {
    return `http://localhost:8000/api/v1/${method}/`
  }
}

export default ApiV1;
