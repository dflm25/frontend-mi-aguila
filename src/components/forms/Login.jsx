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

function LoginForm () {
  return (
    <form>
      <div className="form-group">
        <label forHtml="email">Email <span>*</span></label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="form-group">
        <label forHtml="email">Password <span>*</span></label>
        <input type="email" className="form-control" name="email" />
      </div>
      <div className="form-group">
       <button type="submit" className="btn btn-primary btn-block">Login</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {

}

export default LoginForm;