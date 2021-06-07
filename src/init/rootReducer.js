import { combineReducers } from 'redux';

// делаем алиас чтобы в дальнейшем его использовать
import {
  forecastReducer as weather,
} from '../bus/weather/reducer';

import {
  clientReducer as weatherDayId,
} from '../bus/client/activeDay/reducer';

export const rootReducer = combineReducers({ // большой обьект состояния
  weather,
  weatherDayId,
});
