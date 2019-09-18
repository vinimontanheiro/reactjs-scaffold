import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayerContainer = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ color }) => color};
  z-index: 9999;
  top: 0;
  left: 0;
`;

const LayerBody = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  justify-self: center;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const OverLayer = ({ children, color }) => {
  return (
    <LayerContainer color={color}>
      <LayerBody>{children}</LayerBody>
    </LayerContainer>
  );
};

OverLayer.defaultProps = {
  color: `rgba(0, 0, 0, 0.6)`,
};

OverLayer.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default OverLayer;
