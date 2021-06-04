import { api } from '../../api';

import { types } from './types';

export const weatherActions = Object.freeze({
  startFetching: () => ({
    type: types.WEATHER_START_FETCHING,
  }),

  stopFetching: () => ({
    type: types.WEATHER_STOP_FETCHING,
  }),

  fill: payload => ({
    type: types.WEATHER_FILL,
    payload, // payload: payload
  }),

  setFetchingError: error => ({
    type: types.WEATHER_SET_FETCHING_ERROR,
    error: true,
    payload: error,
  }),

  setSelectedDay: payload => ({
    type: types.DISPLAY_THE_SELECT_DAY,
    payload, // payload: payload
  }),

  fetchAsync: () => async(dispatch) => {
    dispatch(weatherActions.startFetching());

    const response = await api.weather.fetch();

    // проверить что возвращает response.json() с нашего api
    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(weatherActions.fill(data));
    } else {
      const error = {
        status: response.status,
      };

      dispatch(weatherActions.setFetchingError(error));
    }

    dispatch(weatherActions.stopFetching());
  },
});
