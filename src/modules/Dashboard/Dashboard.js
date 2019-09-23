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

const Dashboard = props => {
  /* eslint-disable react/prop-types */
  const {
    location: {
      state: { color },
    },
  } = props;
  return (
    <Container color={color}>
      <Body> Dashboard</Body>
    </Container>
  );
};

Dashboard.propTypes = {
  location: PropTypes.shape({}).isRequired,
};

export default Dashboard;
