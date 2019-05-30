import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
  request(url, options) {
    return axios({ url, ...options });
  },
  mock() {
    return new MockAdapter(axios);
  }
};
