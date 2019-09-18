import React from 'react';
import ReactLoading from 'react-loading';
import useLoading from '../hooks/useLoading';
import Overlayer from './Overlayer';

const Loading = () => {
  const { loading } = useLoading();
  return (
    loading && (
      <Overlayer>
        <ReactLoading type="spokes" color="#ffffff" width="35px" height="35px" />
      </Overlayer>
    )
  );
};

export default Loading;
