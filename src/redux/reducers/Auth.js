/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from '../constants';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const defaultUser = {
  id: null,
  name: null,
  email: null,
};

const initialState = {
  isAuthenticated: false,
  user: defaultUser,
};

const authLogin = (state, payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
  // Http.defaults.headers.common.Authorization = `Bearer ${AccessToken}`;
  // localStorage.setItem('access_token', AccessToken);

  const stateObj = Object.assign({}, state, {
    isAuthenticated: true,
    user: payload,
  });
  return stateObj;
};

const checkAuth = (state) => {
  const stateObj = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('access_token'),
    user: JSON.parse(localStorage.getItem('user')),
  });
  if (state.isAuthenticated) {
    // Http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  }
  return stateObj;
};

const logout = (state) => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
  const stateObj = Object.assign({}, state, {
    isAuthenticated: false,
    user: defaultUser,
  });
  return stateObj;
};

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case AUTH_LOGIN:
      return authLogin(state, payload);
    case AUTH_CHECK:
      return checkAuth(state);
    case AUTH_LOGOUT:
      return logout(state);
    default:
      return state;
  }
};

export default Auth;


