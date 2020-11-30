/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */


/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

function persistStore(state, payload) {
  const stateObj = Object.assign({}, state, payload);
  return stateObj;
}

const reducer = (state = {}, { type, payload = null }) => {
  switch (type) {
    case 'persist/REHYDRATE':
      return persistStore(state, payload);
    default:
      return state;
  }
};

export default reducer;
