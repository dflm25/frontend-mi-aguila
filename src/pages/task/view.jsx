/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

// Components
import AdminLayout from '../../components/layout/Admin';
import TaskForm from '../../components/forms/Todo';
import TaskList from '../../components/taskList';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

function User({ taskAction, tasks }) {
  const [ defaultFormData, setDefaultFormData ] = useState({});
  const { createTask, clearTask } = taskAction;
  const submitForm = (data) => {
    createTask(data.description);
  }

  // Clear task list
  const clearList = () => {
    swal({
      title: "Estas seguro?",
      text: "Todas las tareas seran eliminadas",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        clearTask();
      } 
    });
  }

  return (
    <AdminLayout title="Tareas">
      <div className="table-content">
        <section className="card container">
          <TaskForm 
            submitForm={submitForm} 
            defaultValues={defaultFormData}
          />
          <TaskList 
            tasks={tasks} 
            actions={taskAction}
            loadEditData={setDefaultFormData}
          />
          <div className="text-center p-3">
            <button 
              className="btn btn-primary"
              onClick={clearList}
            >
              Eliminar todas las tareas
            </button>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}

User.propTypes = {
  taskAction: PropTypes.shape({
    createTask: PropTypes.func,
    clearTask: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
  tasks: PropTypes.array,
}

export default User;
