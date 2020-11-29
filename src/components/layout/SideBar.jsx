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
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaTasks } from "react-icons/fa";
import { useLocation } from 'react-router-dom'

// Assets
import Logo from '../../assets/img/logo.svg';

function SideBar () {
  const location = useLocation();

  return (
    <div className="border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img src={Logo} alt="Mi aguila"/>
      </div>
      <div className="list-group list-group-flush">
        <Link to="/home" className={`list-group-item list-group-item-action ${location.pathname == '/home' && 'active'}`}>
          <FaHome /> <span>Inicio</span>
        </Link>
        <Link to="/users" className={`list-group-item list-group-item-action ${location.pathname == '/users' && 'active'}`}>
          <FaUsers /> <span>Usuarios</span>
        </Link>
        <Link to="/tasks" className={`list-group-item list-group-item-action ${location.pathname == '/tasks' && 'active'}`}>
          <FaTasks /> <span>Tareas</span>
        </Link>
      </div>
    </div>
  );
}

SideBar.propTypes = {

}

export default SideBar;