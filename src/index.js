// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

// Init
import { store } from './init/store';

// App
import { Weather } from './view/pages/Weather';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Weather />
  </ReduxProvider>,
  document.getElementById('root'),
);
