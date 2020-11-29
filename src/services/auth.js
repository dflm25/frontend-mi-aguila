
/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import * as action from '../redux/actions/auth';

export const login = (params) => {
  return dispatch => (
    new Promise((resolve, reject) => {
      if (params) {
        dispatch(action.authLogin(params));
        resolve('success');
      } else {
        reject('error');
      }
    })
  );
}