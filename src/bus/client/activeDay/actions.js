import { types } from './types';

export const weatherDayIdActions = Object.freeze({
  setUserId: payload => ({
    type: types.WEATHER_SET_ACTIVE_DAY,
    payload,
  }),
});
