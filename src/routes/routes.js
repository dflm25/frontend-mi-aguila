/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import Login from '../pages/login';
import Home from '../pages/home';
import User from '../pages/user';
import Task from '../pages/task';

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: '/home',
    exact: true,
    auth: true,
    component: Home,
  },
  {
    path: '/users',
    exact: true,
    auth: true,
    component: User,
  },
  {
    path: '/tasks',
    exact: true,
    auth: true,
    component: Task,
  }
];

export default routes;
