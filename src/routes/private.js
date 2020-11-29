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
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log('isAuthenticated', isAuthenticated);
      return (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
          <Redirect to={{
                pathname: '/',
                state: { from: props.location },
            }}
          />
        )
    )
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.object,
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
