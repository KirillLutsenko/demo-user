import { combineReducers } from 'redux';

// делаем алиас чтобы в дальнейшем его использовать
import { themeReducer as theme } from '../domains/theme/reducers/theme';

export const rootReducer = combineReducers({ // большой обьект состояния
  theme, // обьект подсостояния
});
