import { api } from './api';

import {
  WEATHER_START_FETCHING,
  WEATHER_STOP_FETCHING,
  WEATHER_FILL,
  WEATHER_SET_FETCHING_ERROR,
  WEATHER_SET_MIN_TEMPERATURE,
  WEATHER_SET_MAX_TEMPERATURE,
  WEATHER_SET_TYPE_OF_WEATHER,
  WEATHER_SET_MAXTEMPVALID_ERROR,
  WEATHER_SET_MINTEMPVALID_ERROR,
  WEATHER_SET_STATUS_OF_FILTER,
} from './types';

export const forecastActions = Object.freeze({
  // fetch actions
  startFetching: () => ({
    type: WEATHER_START_FETCHING,
  }),

  stopFetching: () => ({
    type: WEATHER_STOP_FETCHING,
  }),

  fill: payload => ({
    type: WEATHER_FILL,
    payload,
  }),

  setFetchingError: error => ({
    type: WEATHER_SET_FETCHING_ERROR,
    error: true,
    payload: error,
  }),

  fetchAsync: () => async(dispatch) => {
    dispatch(forecastActions.startFetching());

    const response = await api.weather.fetch();

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(forecastActions.fill(data));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(forecastActions.setFetchingError(error));
    }

    dispatch(forecastActions.stopFetching());
  },

  // filter actions
  setMinTemperature: payload => ({
    type: WEATHER_SET_MIN_TEMPERATURE,
    payload,
  }),

  setMaxTemperature: payload => ({
    type: WEATHER_SET_MAX_TEMPERATURE,
    payload,
  }),

  setTypeOfWeather: payload => ({
    type: WEATHER_SET_TYPE_OF_WEATHER,
    payload,
  }),

  setMinTempValidationError: payload => ({
    type: WEATHER_SET_MINTEMPVALID_ERROR,
    payload,
  }),

  setMaxTempValidationError: payload => ({
    type: WEATHER_SET_MAXTEMPVALID_ERROR,
    payload,
  }),

  setFilterStatus: payload => ({
    type: WEATHER_SET_STATUS_OF_FILTER,
    payload,
  }),
});
