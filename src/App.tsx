import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

/**
 * The root application component.
 * @constructor
 */
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          {routes.map((route, routeIndex) => (
            <Route
              key={routeIndex}
              {...route}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
