
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

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

function Home({ globalAction, loading }) {
  const { setLoading } = globalAction;

  return (
    <div className="App">
      <MoonLoader
        size={150}
        color={"red"}
        loading={loading}
      />
      <button onClick={() => setLoading(!loading)}>Set loading Home</button>
    </div>
  );
}

Home.propTypes = {
  globalAction: PropTypes.shape({
    setLoading: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
}


export default Home;