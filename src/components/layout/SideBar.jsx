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

// Assets
import Logo from '../../assets/img/logo.svg';

function SideBar () {
  return (
    <div className="border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <img src={Logo} alt="Mi aguila"/>
      </div>
      <div className="list-group list-group-flush">
        <Link to="/home" className="list-group-item list-group-item-action active">
          <FaHome /> <span>Inicio</span>
        </Link>
        <Link to="/users" className="list-group-item list-group-item-action">
          <FaUsers /> <span>Usuarios</span>
        </Link>
        <Link to="/tasks" className="list-group-item list-group-item-action">
          <FaTasks /> <span>Tareas</span>
        </Link>
      </div>
    </div>
  );
}

SideBar.propTypes = {

}

export default SideBar;