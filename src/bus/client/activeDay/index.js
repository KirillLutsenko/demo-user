// core
import { useDispatch, useSelector } from 'react-redux';

// actions
import { weatherDayIdActions } from './actions';

// types & reducers
export * from './types';
export * from './reducer';

export const useWeatherDayId = () => {
  const dispatch = useDispatch();
  const useDayId = id => dispatch(weatherDayIdActions.setUserId(id));

  const dayId = useSelector(state => state.weatherDayId.activeId);

  return {
    dayId,
    useDayId,
  };
};
