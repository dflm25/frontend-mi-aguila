/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import React, { useEffect } from 'react';
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

function TaskForm ({ submitForm, defaultValues }) {
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

  useEffect(() => {
    console.log('Reset', defaultValues);
    reset({ defaultValues })
  }, [defaultValues])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {errors.description && renderError(errors.description.message)}
      <div className="input-group mb-5">
        <input type="text" className="form-control" name="description" ref={register} placeholder="Escribe una tarea..." />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary btn-task">Agregar</button>
        </div>
      </div>
    </form>
  );
}

TaskForm.propTypes = {
  submitForm: PropTypes.func,
  defaultValues: PropTypes.object,
}

export default TaskForm;