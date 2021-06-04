import { types } from '../types';

const initialState = {
  activeId: null,
};

export const selectorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_THE_SELECT_DAY:
      return {
        ...state,
        activeId: action.payload,
      };

    default:
      return state;
  }
};
