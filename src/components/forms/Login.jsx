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
const regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,16}$/;
const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email es requerido')
    .email('Formato email invalido'),
  password: yup
    .string()
    .required('Password es requerido')
    .min(7, 'Mínimo 7 caracteres')
    .matches(regex, "un Numero, una mayuscula y un caracter especial"),
});

const renderError = (error) => (<div className="error">{error}</div>);

function LoginForm ({ submitForm }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // Submit form
  const onSubmit = data => submitForm(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email <span>*</span></label>
        <input type="text" className="form-control" name="email" ref={register} />
        {errors.email && renderError(errors.email.message)}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password <span>*</span></label>
        <input type="password" className="form-control" name="password" ref={register} />
        {errors.password && renderError(errors.password.message)}
      </div>
      <div className="form-group">
       <button type="submit" className="btn btn-primary btn-block">Login</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  submitForm: PropTypes.func,
}

export default LoginForm;