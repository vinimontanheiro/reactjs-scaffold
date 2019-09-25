import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Route
      {...rest}
      render={props => (isAuth ? <Component {...rest} {...props} /> : <Redirect to="/" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
