import { types } from '../types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
  selectedDay: 0,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.WEATHER_START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };

    case types.WEATHER_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
      };

    case types.WEATHER_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };

    case types.WEATHER_FILL:
      return {
        ...state,
        data: payload,
        error: null,
      };

    case types.DISPLAY_THE_SELECT_DAY:
      return {
        ...state,
        selectedDay: payload,
      };

    default:
      return state;
  }
};
