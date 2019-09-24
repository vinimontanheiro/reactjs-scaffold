import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SelectLanguage from '../ui/SelectLanguage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  ${({ color }) => color && `background-color: ${color}`};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  /* eslint-disable react/prop-types */
  return (
    <Container>
      <Body>
        <SelectLanguage />
      </Body>
    </Container>
  );
};

Login.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default Login;
