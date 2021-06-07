// core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { forecastActions } from './actions';

// types & reducers
export * from './types';
export * from './reducer';

export const useForecast = () => {
  const dispatch = useDispatch();
  const {
    data,
    isFetching,
    error,
    minTemperature,
    maxTemperature,
    weatherType,
    minTempValidError,
    maxTempValidError,
    filterStatus,
  } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(forecastActions.fetchAsync());
  }, [dispatch]);

  const minTemperatureChange = (event) => {
    const { value } = event.target;
    const numberValidation = value.replace(/[^\d.]/g, '');

    dispatch(forecastActions.setMinTempValidationError(false));
    dispatch(forecastActions.setMinTemperature(numberValidation));
  };

  const maxTemperatureChange = (event) => {
    const { value } = event.target;
    const numberValidation = value.replace(/[^\d.]/g, '');

    dispatch(forecastActions.setMaxTempValidationError(false));
    dispatch(forecastActions.setMaxTemperature(numberValidation));
  };

  const setWeatherType = type => dispatch(
    forecastActions.setTypeOfWeather(type),
  );

  const filterWeather = async() => {
    if (minTemperature === '' && maxTemperature === '') {
      dispatch(forecastActions.setMinTempValidationError(true));
      dispatch(forecastActions.setMaxTempValidationError(true));
    } else if (minTemperature === '') {
      dispatch(forecastActions.setMinTempValidationError(true));
    } else if (maxTemperature === '') {
      dispatch(forecastActions.setMaxTempValidationError(true));
    } else {
      await dispatch(forecastActions.fetchAsync());

      const filteredData = data.filter(day => day.type === weatherType
        && day.temperature >= minTemperature
        && day.temperature <= maxTemperature);

      dispatch(forecastActions.fill(filteredData));
      dispatch(forecastActions.setFilterStatus(true));
    }
  };

  const resetFilters = () => {
    dispatch(forecastActions.fetchAsync());

    dispatch(forecastActions.setMinTemperature(''));
    dispatch(forecastActions.setMaxTemperature(''));
    dispatch(forecastActions.setTypeOfWeather('sunny'));

    dispatch(forecastActions.setFilterStatus(false));
  };

  return {
    data,
    isFetching,
    error,
    minTemperature,
    maxTemperature,
    weatherType,
    minTempValidError,
    maxTempValidError,
    filterStatus,
    minTemperatureChange,
    maxTemperatureChange,
    setWeatherType,
    filterWeather,
    resetFilters,
  };
};
