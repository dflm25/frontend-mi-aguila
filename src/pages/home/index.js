
/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */


// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as globalActions from '../../redux/actions/global';

// Component
import Home from './view';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Home page
 */

/**
 * Map state to props
 * @returns { object }
 */
export const mapStateToProps = (state) => ({
  loading: state.Global.loading,
  user: state.Auth.user,
});

/**
 * Map dispatch to props
 * @param dispatch - Run the  process to execute in the action
 * @returns { object }
 */
export const mapDispatchToProps = (dispatch) => ({
  globalAction: bindActionCreators(globalActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);