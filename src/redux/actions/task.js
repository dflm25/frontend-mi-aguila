/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK, CLEAR_TASK } from '../constants';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

/**
 * Create task
 * @param {*} task  - task object
 */
export const createTask = (task) => ({ type: CREATE_TASK, payload: task });

/**
 * Update task
 * @param {*} id - task id
 * @param {*} task - task description
 */
export const updateTask = (id, task) => {
  return { 
    type: UPDATE_TASK, 
    payload: { id, task } 
  }
}

/**
 * Remove task
 * @param {*} id - id task 
 */
export const removeTask = (id) => ({ type: REMOVE_TASK, payload: { id } });

/**
 * Clear all task
 * @param {*} id 
 */
export const clearTask = () => ({ type: CLEAR_TASK });