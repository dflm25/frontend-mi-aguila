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
import { FaUserCheck, FaUserTimes } from 'react-icons/fa';

function Datatable ({ data }) {

  if (!data) {
    return null;
  }

  const renderItem = (item) => {
    return (
    <>
      <td>{item.id}</td>
      <td>{item.first_name} {item.last_name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td className="text-center">{item.status ? <FaUserCheck color="green" /> : <FaUserTimes color="red" />}</td>
    </>
    )
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Email</th>
          <th className="text-center">Estado</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map(item => (<tr key={`item-${item.id}`}>{renderItem (item)}</tr>))
      }
      </tbody>
    </table>
  );
}

Datatable.propTypes = {
  data: PropTypes.array,
}

export default Datatable;