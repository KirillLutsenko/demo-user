import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../actions';

export const useSelectedDay = () => {
  const dispatch = useDispatch();

  const { dayId } = useSelector(({ activeId }) => activeId);

  const setId = id => dispatch(weatherActions.setSelectedDay(id));

  return {
    setId,
    dayId,
  };
};
