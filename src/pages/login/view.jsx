
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
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Login view page
 */

function Login({ globalAction, loading }) {
  const { setLoading } = globalAction;

  return (
    <div className="App">
      <MoonLoader
        size={150}
        color={"red"}
        loading={loading}
      />
      <button onClick={() => setLoading(!loading)}>Set loading Login</button>
      <br />
      <Link to="/home">Go to home</Link>
    </div>
  );
}

Login.propTypes = {
  globalAction: PropTypes.shape({
    setLoading: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
}


export default Login;