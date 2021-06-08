import React from 'react';
import { useForecast } from '../../bus/weather';
import { FilterBlock } from './FilterBlock';
import { HeadBlock } from './HeadBlock/HeadBlock';
import { CurrentWeather } from './CurrentWeather/CurrentWeather';
import { Forecast } from './Forecast/Forecast';
import './Weather.css';

export const Weather = () => {
  const {
    isFetching,
    data,
    error,
    resetFilters,
  } = useForecast();

  if (error && error.status === 404) {
    return <p className="error">Sorry, weather forecast is not found</p>;
  }

  if (error && error.status !== 404) {
    return <p className="error">Sorry, something went wrong</p>;
  }

  if (!isFetching && data && data.length === 0) {
    return (
      <div className="error">
        <p>By given criteria no days available</p>
        <button
          type="button"
          onClick={resetFilters}
          className="reset-button"
        >
          Reset filters
        </button>
      </div>
    );
  }

  const getTemperature = id => data
    && data.length
    && data[id].temperature;

  return (
    <div className="weather-widget">
      {isFetching && (
        <p className="error">Loading data from api</p>
      )}

      <main>
        <FilterBlock />
        <HeadBlock />
        <CurrentWeather getTemperature={getTemperature} />
        <Forecast getTemperature={getTemperature} />
      </main>
    </div>
  );
};
