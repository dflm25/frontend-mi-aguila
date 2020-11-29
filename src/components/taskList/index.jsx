/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { FaTrashAlt, FaEdit, FaCheckSquare,  } from 'react-icons/fa';

function TaskList ({ tasks, actions, loadEditData }) {
  if (!tasks) {
    return null;
  }

  const removeTask = (id) => {
    swal({
      title: "Estas seguro?",
      text: "La tarea sera eliminada de la lista",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        actions.removeTask (id);
      } 
    });
  }

  const updateStatus = (id) => {
    actions.updateTask(id);
  }

  return (
    <ul className="todo">
      {
        tasks.map(item => (<li key={item.id} className={item.isComplete ? 'checked' : ''}>
          <span>{item.description}</span>
          <div className="controls">
            <FaCheckSquare 
              color={item.isComplete ? 'green' : 'gray'}
              onClick={() => updateStatus(item.id)}
            />
            <FaEdit
              onClick={() => loadEditData({ id: item.id, description: item.description })}
            />
            <FaTrashAlt 
              color="#1ba87e" 
              onClick={() => removeTask(item.id)}
            />
          </div>
        </li>))
      }
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  actions: PropTypes.shape({
    removeTask: PropTypes.func,
    updateTask: PropTypes.func,
  }).isRequired,
  loadEditData: PropTypes.func,
}

export default TaskList;