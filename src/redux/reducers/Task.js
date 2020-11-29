/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */
import { uuidv4 } from '../../utils';
import { CREATE_TASK, REMOVE_TASK, UPDATE_TASK, CLEAR_TASK } from '../constants';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const initialState = [];

const Task = (state = initialState, { type, payload = null}) => {
  switch (type) {
    case CREATE_TASK:      
      return [...state, { id: uuidv4(), description: payload, isComplete: false }];
    case REMOVE_TASK:
      return state.filter((item) => item.id !== payload.id);
    case UPDATE_TASK:
      return state.map((item) => {
        if (item.id === payload.id) {
          const updatedItem = {
            ...item,
            isComplete: !item.isComplete,
          };
 
          return updatedItem;
        }
 
        return item;
      });
    case CLEAR_TASK:
      return state = [];
    default:
      return state;
  }
}

export default Task;