import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginComponent from '../Login/LoginComponent';
import PrivateRoute from './PrivateRoute';
import { PrivateRoutes } from './RoutesMapper';

const RoutesProvider = ({ isAuth }) => {
  return (
    <Switch>
      <Route exact path="/" component={LoginComponent} />
      <>
        {PrivateRoutes.map(
          ({ name, path, component, ignore }) =>
            !ignore && (
              <PrivateRoute
                key={`${name}-${path}`}
                isAuth={isAuth}
                path={path}
                component={component}
              />
            ),
        )}
      </>
    </Switch>
  );
};

RoutesProvider.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default RoutesProvider;
