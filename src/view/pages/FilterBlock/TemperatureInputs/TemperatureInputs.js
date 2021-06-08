import React from 'react';
import { useForecast } from '../../../../bus/weather';
import './TemperatureInputs.css';

export const TemperatureInputs = () => {
  const {
    minTemperature,
    maxTemperature,
    minTempValidError,
    maxTempValidError,
    filterStatus,
    filterWeather,
    minTemperatureChange,
    maxTemperatureChange,
    resetFilters,
  } = useForecast();

  return (
    <div className="filter-inputs">
      <div className="custom-input">
        <label htmlFor="min-temperature">Minimum temperature</label>
        <input
          id="min-temperature"
          type="text"
          maxLength="2"
          value={minTemperature}
          onChange={minTemperatureChange}
        />
        {minTempValidError && (
          <p className="validation-error">
            Enter temperature
          </p>
        )}
      </div>
      <div className="custom-input">
        <label htmlFor="min-temperature">Maximum temperature</label>
        <input
          id="max-temperature"
          type="text"
          maxLength="2"
          value={maxTemperature}
          onChange={maxTemperatureChange}
        />
        {maxTempValidError && (
          <p className="validation-error">
            Enter temperature
          </p>
        )}
      </div>
      {!filterStatus ? (
        <button
          type="button"
          onClick={filterWeather}
          className="button"
        >
          Filter
        </button>
      ) : (
        <button
          type="button"
          onClick={resetFilters}
          className="button"
        >
          Reset filters
        </button>
      )}
    </div>
  );
};
