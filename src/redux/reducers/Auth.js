/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import moment from 'moment';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_UPDATE_TIME } from '../constants';

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
  isAuthenticated: !!localStorage.getItem('user'),
  user: defaultUser,
};

const authLogin = (state, payload) => {
  localStorage.setItem('user', JSON.stringify(payload));
  
  const stateObj = Object.assign({}, state, {
    isAuthenticated: true,
    user: payload,
  });
  return stateObj;
};

const checkAuth = (state) => {
  const stateObj = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('user'),
    user: JSON.parse(localStorage.getItem('user')),
  });
  return stateObj;
};

const logout = (state) => {
  localStorage.removeItem('user');
  const stateObj = Object.assign({}, state, {
    isAuthenticated: false,
    user: defaultUser,
  });
  return stateObj;
};

const updateTime = (state) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.active = moment();
  const stateObj = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem('user'),
    user
  });

  localStorage.setItem('user', JSON.stringify(user));
  return stateObj;
}

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case AUTH_LOGIN:
      return authLogin(state, payload);
    case AUTH_CHECK:
      return checkAuth(state);
    case AUTH_LOGOUT:
      return logout(state);
    case AUTH_UPDATE_TIME:
      return updateTime (state)
    default:
      return state;
  }
};

export default Auth;


