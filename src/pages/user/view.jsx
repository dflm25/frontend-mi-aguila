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
import AdminLayout from '../../layout';
import Datatable from '../../components/datatable';

// Services
import { getUsers } from '../../services/users';

// Utils
import { arraySort } from '../../utils';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home view page
 */

const getUserData = async (setUser) => {
  const response = await getUsers();
  const { users = [] } = response;
  setUser(users.sort(arraySort));
}

function User() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    getUserData (setUser);
  }, []);

  return (
    <AdminLayout title="Usuarios">
      <div className="table-content">
        <Datatable data={user} />
      </div>
    </AdminLayout>
  );
}

User.propTypes = {
  globalAction: PropTypes.shape({
    setLoading: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
}

export default User;
