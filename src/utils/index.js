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