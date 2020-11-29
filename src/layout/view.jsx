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
import SideBar from '../components/layout/SideBar';
import Header from '../components/layout/Header';

// Assets
import '../assets/css/admin.scss';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

function Admin (props) {
  const { children } = props;
  return (
    <div className="d-flex" id="wrapper">
      <SideBar />
      <div id="page-content-wrapper">
        <Header {...props}/>
        <div className="container-fluid">
          {children}
        </div>
      </div>
    </div>
  );
}

Admin.propTypes = {
  children: PropTypes.object,
}

export default Admin;