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

// Assets
import '../../assets/css/modalSession.scss';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

function ModalSession ({ show, handle, authAction }) {

  const handleClick = (type) => {
    handle(false);
    if (type === 'confirm') {
      authAction.updateTimeSession();
    }
  }

  return (
    <div id="myModal" className="modal-session" style={{ display: show ? '' : 'none' }}>
      <div className="modal-content">
        <p>La session se cerrara automaticamente en un minuto quieres seguir navegando?</p>
        <div className="text-center">
          <button className="btn btn-primary m-2" onClick={()=>handleClick('confirm')}>Continuar</button>
        </div>
      </div>
    </div>
  );
}

ModalSession.propTypes = {
  show: PropTypes.bool,
  handle: PropTypes.func,
  authAction: PropTypes.shape({
    updateTimeSession: PropTypes.func,
  }).isRequired
}

export default ModalSession;