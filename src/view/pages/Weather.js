import React from 'react';
import { useForecast } from '../../bus/weather';
import { useWeatherDayId } from '../../bus/client/activeDay';
import './Weather.css';

const classNames = require('classnames');

const moment = require('moment');

export const Weather = () => {
  const {
    isFetching,
    data,
    error,
    minTemperature,
    maxTemperature,
    weatherType,
    minTempValidError,
    maxTempValidError,
    filterStatus,
    filterWeather,
    minTemperatureChange,
    maxTemperatureChange,
    setWeatherType,
    resetFilters,
  } = useForecast();

  const { dayId, useDayId } = useWeatherDayId();

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

  const getDayOfWeek = () => data
    && data.length
    && moment(data[dayId].day).format('dddd');

  const getDate = () => data
    && data.length
    && moment(data[dayId].day).format('MMMM do');

  const getTemperature = id => data
    && data.length
    && data[id].temperature;

  const getRainProbability = id => data
    && data.length
    && data[id].rain_probability;

  const getHumidity = id => data
    && data.length
    && data[id].humidity;

  return (
    <div className="weather-widget">
      {isFetching && (
        <p className="error">Loading data from api</p>
      )}

      <main>
        <div className="filter">
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
          <div className="custom-input">
            <label htmlFor="min-temperature">Minimum temperature</label>
            <input
              id="min-temperature"
              type="text"
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
        <div className="head">
          <div
            className={data
              && data.length
              && classNames(
                'icon', {
                  'icon sunny': data[dayId].type === 'sunny',
                  'icon cloudy': data[dayId].type === 'cloudy',
                  'icon rainy': data[dayId].type === 'rainy',
                },
              )
              }
          />
          <div className="current-date">
            <p>
              {!isFetching && getDayOfWeek()}
            </p>
            <span>
              {!isFetching && getDate()
              }
            </span>
          </div>
        </div>
        <div className="current-weather">
          <p className="temperature">
            {!isFetching && getTemperature(dayId)
            }
          </p>
          <p className="meta">
            <span className="rainy">
              {`%${!isFetching && getRainProbability(dayId)}`}
            </span>
            <span className="humidity">
              {`%${!isFetching && getHumidity(dayId)}`}
            </span>
          </p>
        </div>
        <div className="forecast">
          {!isFetching
            && data
            && data.length
            && data
              .slice(0, 7)
              .map((obj, index) => (
                // eslint-disable-next-line
                <div
                  key={obj.id}
                  onClick={() => useDayId(index)}
                  onKeyDown={() => useDayId(index)}
                  tabIndex={0}
                  role="button"
                  className={classNames(
                    'day', {
                      'day selected': index === dayId,
                      'day sunny': obj.type === 'sunny',
                      'day cloudy': obj.type === 'cloudy',
                      'day rainy': obj.type === 'rainy',
                    },
                  )
                  }
                >
                  <p>
                    {moment(obj.day).format('dddd')}
                  </p>
                  <span>
                    {getTemperature(index)}
                  </span>
                </div>
              ))}
        </div>
      </main>
    </div>
  );
};
