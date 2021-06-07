import {
  WEATHER_START_FETCHING,
  WEATHER_STOP_FETCHING,
  WEATHER_FILL,
  WEATHER_SET_FETCHING_ERROR,
  WEATHER_SET_MIN_TEMPERATURE,
  WEATHER_SET_MAX_TEMPERATURE,
  WEATHER_SET_TYPE_OF_WEATHER,
  WEATHER_SET_MINTEMPVALID_ERROR,
  WEATHER_SET_MAXTEMPVALID_ERROR,
  WEATHER_SET_STATUS_OF_FILTER,
} from './types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
  weatherType: 'sunny',
  minTemperature: '',
  maxTemperature: '',
  minTempValidError: false,
  maxTempValidError: false,
  filterStatus: false,
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };

    case WEATHER_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
      };

    case WEATHER_SET_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
        data: null,
      };

    case WEATHER_FILL:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case WEATHER_SET_TYPE_OF_WEATHER:
      return {
        ...state,
        weatherType: action.payload,
      };

    case WEATHER_SET_MIN_TEMPERATURE:
      return {
        ...state,
        minTemperature: action.payload,
      };

    case WEATHER_SET_MAX_TEMPERATURE:
      return {
        ...state,
        maxTemperature: action.payload,
      };

    case WEATHER_SET_MINTEMPVALID_ERROR:
      return {
        ...state,
        minTempValidError: action.payload,
      };

    case WEATHER_SET_MAXTEMPVALID_ERROR:
      return {
        ...state,
        maxTempValidError: action.payload,
      };

    case WEATHER_SET_STATUS_OF_FILTER:
      return {
        ...state,
        filterStatus: action.payload,
      };

    default:
      return state;
  }
};
