/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import Http from './Http';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

export const getUsers = (credentials) => {
  return new Promise((resolve, reject) => {
    Http.get('https://api.mocki.io/v1/bbbea2b2', credentials)
    .then(res => resolve(res.data))
    .catch((err) => {
      const { status, errors } = err.response.data;
      const data = {
        status,
        errors,
      };
      return reject(data);
    });
  })
}