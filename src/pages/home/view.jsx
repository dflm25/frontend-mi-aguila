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

// Components
import AdminLayout from '../../layout';

// Assets
import Background from '../../assets/img/inicio.png';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

function Home() {
  return (
    <AdminLayout title="Inicio">
      <div className="home-content">
        <img src={Background} alt="Bienvenido" className="welcome-image" />
      </div>
    </AdminLayout>
  );
}

Home.propTypes = {
  globalAction: PropTypes.shape({
    setLoading: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
}


export default Home;