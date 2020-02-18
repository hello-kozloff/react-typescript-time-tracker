import React from 'react';
import { RouteProps } from 'react-router-dom';

/**
 * The application routes.
 */
const routes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    children: (
      <div className="page page_layout_homepage">
        <h1>Welcome page</h1>
      </div>
    )
  },
  {
    path: '*',
    children: (
      <div className="page page_layout_not-found">

      </div>
    )
  }
];

export default routes;
