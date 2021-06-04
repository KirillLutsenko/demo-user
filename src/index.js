// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

// App
import { Weather } from './view/pages/Weather';

import { store } from './init/store';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Weather />
  </ReduxProvider>,
  document.getElementById('root'),
);
