import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  ${({ color }) => color && `background-color: ${color}`};

  &:hover{
    background-color: pink;
  }
`;

const HomeComponent = ({ color, children }) => {
  return (
    <Container className="App" color={color}>
      {children}
    </Container>
  );
};

HomeComponent.defaultProps = {
  color: 'black'
};

HomeComponent.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default HomeComponent;
