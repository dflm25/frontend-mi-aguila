/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import SideBar from '../components/layout/SideBar';
import Header from '../components/layout/Header';
import ModalSession from '../components/notifications/modalSession';

// Utils
import { checkSession } from '../utils';
// Assets
import '../assets/css/admin.scss';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */


function Admin (props) {
  const { authAction } = props;
  const [modalStatus, setModalStatus] = useState(false);
  const { children } = props;

  const closeSession = () => {
    authAction.authLogout();
  }

  useEffect(() => {
    const timer1 = setInterval(()=> {
      checkSession(modalStatus, setModalStatus, closeSession);
    }, 10000);

    return () => {
      clearTimeout(timer1);
    }
  })
  
  return (
    <div className="d-flex" id="wrapper">
      <ModalSession show={modalStatus} handle={setModalStatus} {...props} />
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
  authAction: PropTypes.shape({
    authLogout: PropTypes.func,
  }).isRequired
}

export default Admin;