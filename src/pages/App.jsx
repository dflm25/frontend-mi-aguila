
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
import MoonLoader from "react-spinners/MoonLoader";

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/global';

function App({ globalAction, loading }) {
  const { setLoading } = globalAction;

  return (
    <div className="App">
      <MoonLoader
        size={150}
        color={"red"}
        loading={loading}
      />
      <button onClick={() => setLoading(!loading)}>Set loading</button>
    </div>
  );
}

App.propTypes = {
  globalAction: PropTypes.shape({
    setLoading: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
}

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = (state) => ({
  loading: state.Global.loading,
});

/**
 * Map dispatch to props
 * @param dispatch - Run the  process to execute in the action
 * @returns { object }
 */
export const mapDispatchToProps = (dispatch) => ({
  globalAction: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
