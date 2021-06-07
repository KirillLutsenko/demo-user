import { types } from './types';

const initialState = {
  activeId: 0,
};

export const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WEATHER_SET_ACTIVE_DAY:
      return {
        activeId: action.payload,
      };

    default:
      return state;
  }
};
