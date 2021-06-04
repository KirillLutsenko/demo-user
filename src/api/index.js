import { weatherApi } from './config';

export const api = Object.freeze({
  weather: {
    fetch: () => fetch(`${weatherApi}/forecast`, {
      method: 'GET',
    }),
  },
});
