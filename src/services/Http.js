
/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import axios from 'axios';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      console.log('Errores', error.response.status);
    }
    return Promise.reject(error);
  },
);

export default axios;
