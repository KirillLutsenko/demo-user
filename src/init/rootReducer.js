import { combineReducers } from 'redux';

// делаем алиас чтобы в дальнейшем его использовать
import {
  weatherReducer as weather,
} from '../bus/weather/reducers/weatherReducer';

import {
  selectorReducer as selector,
} from '../bus/weather/reducers/selectorReducer';

export const rootReducer = combineReducers({ // большой обьект состояния
  selector,
  weather, // обьект подсостояния
});
