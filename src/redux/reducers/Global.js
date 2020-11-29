/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */
import { SET_LOADING } from '../constants';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const initialState = {
  loading: false,
}

const Global = (state = initialState, { type, payload = null}) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload.loading
      };
    default:
      return state;
  }
}

export default Global;