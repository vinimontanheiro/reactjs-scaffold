import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { setLoading } from '../../redux/actions';

const useLoading = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(
    state => ({
      loading: state.App.loading,
    }),
    shallowEqual,
  );

  const updateLoading = useCallback(
    val => {
      dispatch(setLoading(val));
    },
    [loading],
  );
  return {
    loading,
    updateLoading,
  };
};

export default useLoading;
