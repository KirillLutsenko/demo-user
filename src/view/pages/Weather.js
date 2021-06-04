import React from 'react';
import { useWeatherFetch } from '../../bus/weather/hooks/useWeatherFetch';
import { useSelectedDay } from '../../bus/weather/hooks/useSelectedDay';
import './Weather.css';

const classNames = require('classnames');

const moment = require('moment');

export const Weather = () => {
  const { isFetching, data, error } = useWeatherFetch();
  const { dayId, setId } = useSelectedDay();

  if (error && error.status === 404) {
    return <p>Sorry, weather forecast is not found</p>;
  }

  if (error && error.status !== 404) {
    return <p>Sorry, something went wrong</p>;
  }

  const getDayOfWeek = () => data
    && data.length
    && moment(data[dayId].day).format('dddd');

  const getDate = () => data
    && data.length
    && moment(data[dayId].day).format('MMMM do');

  const getTemperature = id => data
    && data[id].length
    && data[id].temperature;

  const getRainProbability = id => data
    && data[id].length
    && data[id].rain_probability;

  const getHumidity = id => data
    && data[id].length
    && data[id].humidity;

  return (
    <>
      {isFetching && (
        <p>Loading data from api</p>
      )}

      <main>
        <div className="filter">
          <span className="checkbox">Cloudy</span>
          <span className="checkbox selected">Sunny</span>
          <div className="custom-input">
            <label htmlFor="min-temperature">Minimum temperature</label>
            <input id="min-temperature" type="text" />
          </div>
          <div className="custom-input">
            <label htmlFor="min-temperature">Maximum temperature</label>
            <input id="max-temperature" type="text" />
          </div>
          <button type="button">filter</button>
        </div>
        <div className="head">
          <div className="icon cloudy" />
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
            {!isFetching && getTemperature(0)
            }
          </p>
          <p className="meta">
            <span className="rainy">
              {`%${!isFetching && getRainProbability(0)}`}
            </span>
            <span className="humidity">
              {`%${!isFetching && getHumidity(0)}`}
            </span>
          </p>
        </div>
        <div className="forecast">
          {!isFetching
            && data
            && data.length
            && data
              .slice(0, 7)
              .map((obj, id) => (
                <div
                  key={obj.id}
                  onClick={setId(obj.id)}
                  onKeyDown={setId(obj.id)}
                  tabIndex={0}
                  role="button"
                  className={classNames(
                    'day', {
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
                    {getTemperature(id)}
                  </span>
                </div>
              ))}
        </div>
      </main>
    </>
  );
};
