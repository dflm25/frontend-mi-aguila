
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
import moment from 'moment';

export const login = (params) => {
  return dispatch => (
    new Promise((resolve, reject) => {
      if (params) {
        const data = Object.assign(params, { name: 'Daniel Lucumi', active: moment() });
        dispatch(action.authLogin(data));
        resolve('success');
      } else {
        reject('error');
      }
    })
  );
}