/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import { combineReducers } from 'redux';
import Global from './Global';
import Auth from './Auth';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const RootReducer = combineReducers({ 
  Global,
  Auth
});

export default RootReducer;
