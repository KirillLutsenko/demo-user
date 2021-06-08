// Core
import React from 'react';

// Hooks
import { useForecast } from '../../../../bus/weather';

// Styles
import './TypeOfWeather.css';

const classNames = require('classnames');

export const TypeOfWeather = () => {
  const { weatherType, setWeatherType } = useForecast();

  return (
    <div className="filter-labels">
      <label className="filter__label" htmlFor="cloudy">
        <span
          className={classNames(
            'checkbox', {
              'checkbox checkbox-selected': weatherType === 'cloudy',
            },
          )}
        >
          Cloudy
        </span>
        <input
          type="radio"
          id="cloudy"
          name="filter"
          className="radio-checkbox"
          onChange={() => setWeatherType('cloudy')}
          checked={weatherType === 'cloudy'}
        />
      </label>
      <label className="filter__label" htmlFor="sunny">
        <span className={classNames(
          'checkbox', {
            'checkbox checkbox-selected': weatherType === 'sunny',
          },
        )}
        >
          Sunny
        </span>
        <input
          type="radio"
          id="sunny"
          name="filter"
          className="radio-checkbox"
          onChange={() => setWeatherType('sunny')}
          checked={weatherType === 'sunny'}
        />
      </label>
      <label className="filter__label" htmlFor="rainy">
        <span
          className={classNames(
            'checkbox', {
              'checkbox checkbox-selected': weatherType === 'rainy',
            },
          )}
        >
          Rainy
        </span>
        <input
          type="radio"
          id="rainy"
          name="filter"
          className="radio-checkbox"
          onChange={() => setWeatherType('rainy')}
          checked={weatherType === 'rainy'}
        />
      </label>
    </div>
  );
};
