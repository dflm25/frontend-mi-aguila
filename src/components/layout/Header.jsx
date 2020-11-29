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
import { FaSearch, FaBell } from "react-icons/fa";

// Assets
import Picture from '../../assets/img/user.png';

function Header ({ title, tasks }) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <span className="breadcrumbs">{title}</span>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <FaSearch color="#C5C7CD" size={24} />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <FaBell color="#C5C7CD" size={24} />
              {tasks.length > 0 ? <span>{tasks.length}</span> : null}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="user-name">Pedro perez</span> 
              <img src={Picture} className="user-picture"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Salir</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
}

export default Header;