// Core
import { createStore, applyMiddleware } from 'redux';

// Tools
import { rootReducer } from './rootReducer';
import { composeEnhancers, middleware } from './middleware';

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
