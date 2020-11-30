
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
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

// components
import LoginForm from '../../components/forms/Login';

// Assets
import '../../assets/css/login.scss';
import Logo from '../../assets/img/logo.svg';

// Services
import * as auth from '../../services/auth';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Login view page
 */

function Login({ globalAction, isAuthenticated, loading }) {
  const { setLoading } = globalAction;
  const dispatch = useDispatch();

  const submitForm = (data) => {
    setLoading(true);
    
    setTimeout(async function () {
      const response = await dispatch(auth.login(data));
      if (response === 'error') {
        swal("Ups!", "Ha ocurrido un error, intentalo de nuevo!", "error");
      } else {
        setLoading(false);
      }
    }, 2000);
  }

  // Validate session to redirect 
  if (isAuthenticated) {
    return (
      <Redirect to="/home" />
    );
  }

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="brand">
              <img src={Logo} alt="logo" />
            </div>
            <div className="card fat">
              <div className="card-body">
							<h4 className="card-title">Login</h4>
              <LoginForm submitForm={submitForm} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Login.propTypes = {
  globalAction: PropTypes.shape({
    setLoading: PropTypes.func,
  }).isRequired,
  authAction: PropTypes.shape({
    authLogin: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
}

export default Login;