import { types } from '../types';

export const themeActions = {
  changeThemeToDefault: () => ({
    type: types.CHANGE_THEME_TO_DEFAULT,
  }),
  changeThemeToDark: () => ({
    type: types.CHANGE_THEME_TO_DARK,
  }),
  fillThemeColor: color => ({
    type: types.FILL_THEME_COLOR,
    payload: color,
  }),
};
