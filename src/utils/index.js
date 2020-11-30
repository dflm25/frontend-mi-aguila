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

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

/**
 * @return sorted array of objects
 */
export const arraySort = (a, b) => {
  if ( a.first_name < b.first_name ){
    return -1;
  }
  if ( a.first_name > b.first_name ){
    return 1;
  }
  return 0;
}

/**
 * Generate uuid
 */
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/**
 * Check session
 */
export const checkSession = (modalStatus, setModal, closeSession) => {
  const session = JSON.parse(localStorage.getItem('user'));
  if (session) {
    const now = moment();
    const diffMins = now.diff(session.active, 'minutes');
    
    if (diffMins > 5) {
      closeSession();
    } else {
      return (diffMins > 4 && !modalStatus) ? setModal(true) : false;
    }
  } else {
    return false;
  }
}

/**
 * Get user data
 */
export const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'));
}