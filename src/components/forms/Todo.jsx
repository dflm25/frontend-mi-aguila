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
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation scheme
const schema = yup.object().shape({
  description: yup
    .string()
    .min(5, 'Debe de contener al menos 5 letras')
    .required('Debes digitar una tarea')
});

const renderError = (error) => (<div className="alert alert-danger text-center">{error}</div>);

function TaskForm ({ submitForm, defaultData }) {
  const { 
    register,
    handleSubmit,
    errors, 
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  // Submit form
  const onSubmit = data => {
    submitForm(data);
    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {errors.description && renderError(errors.description.message)}
      <div className="input-group mb-5">
        <input
          defaultValue={defaultData.description}
          type="text" 
          className="form-control" 
          name="description" 
          ref={register} 
          placeholder="Escribe una tarea..."
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary btn-task">{defaultData.id ? 'Actualizar' : 'Agregar'}</button> 
        </div>
      </div>
      <input type="hidden" name="id" defaultValue={defaultData.id} ref={register} />
    </form>
  );
}

TaskForm.propTypes = {
  submitForm: PropTypes.func,
  defaultData: PropTypes.object,
}

export default TaskForm;