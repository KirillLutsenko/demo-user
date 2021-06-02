import { types } from '../types';
// описываем дефолтное состояние если в редьюсере
// нет обработки для данного типа action
const initialState = {
  current: 'default',
  color: 'black',
};

// state = initialState - если состояние уже поменяно было тогда state
// если еще нет initialState
// export const themeReducer = (state = initialState) => state;

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME_TO_DEFAULT:
      return {
        ...state, // делаем деструктуризацию
        current: 'default', // чтобы при перезаписи обьекта не потерять свойства
      };
    case types.CHANGE_THEME_TO_DARK:
      return {
        ...state,
        current: 'dark',
      };
    case types.FILL_THEME_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};
