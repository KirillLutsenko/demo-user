import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// функция которая вызывается и получает в себя обьект параметров
export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: { // настройка нашего логгера
    title: action => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#FF0005',
  },
});

// проверка на то что это девелопмент окружение
// (чтобы видить экшны только при разработке)
const developmentEnvironment = process.env.NODE_ENV === 'development';
// расширения от гугл хром
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// проверяем если у нас девелопмент режим и у нас есть дефтулз,
// то мы будем использовать функцию обьеденения которую нам дает дефтулз
// если нет то будем использовать compose который нам дает Redux
const composeEnhancers = developmentEnvironment
  && devtools
  ? devtools
  : compose;
// создаем массив всех middlewairs
// добавляем его сразу в middleware так как он нам нуже всегда
const middleware = [thunk];

// если у нас режим разработки добавляем в массив logger
if (developmentEnvironment) {
  middleware.push(logger);
}

export { composeEnhancers, middleware };
