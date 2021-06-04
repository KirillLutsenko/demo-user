import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../actions';

export const useWeatherFetch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.fetchAsync());
  }, [dispatch]);

  const {
    data,
    isFetching,
    error,
  } = useSelector(state => state.weather);

  return {
    data,
    isFetching,
    error,
  };
};
