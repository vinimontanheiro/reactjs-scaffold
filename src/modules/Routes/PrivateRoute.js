import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
  console.log(`Rest `, rest);
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <Route
      {...rest}
      render={props => {
        console.log(`props `, props);

        return isAuth ? <Component {...rest} {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
