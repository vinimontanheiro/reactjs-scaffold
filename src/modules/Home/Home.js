import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  ${({ color }) => color && `background-color: ${color}`};

  &:hover {
    background-color: pink;
  }
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

const Home = ({ color, children }) => {
  return (
    <Container className="App" color={color}>
      <Body> {children}</Body>
    </Container>
  );
};

Home.defaultProps = {
  color: `black`,
};

Home.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Home;
