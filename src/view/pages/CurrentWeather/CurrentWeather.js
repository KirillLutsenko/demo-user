import React from 'react';
import PropTypes from 'prop-types';
import { useForecast } from '../../../bus/weather';
import { useWeatherDayId } from '../../../bus/client/activeDay';
import './CurrentWeather.css';

export const CurrentWeather = ({ getTemperature }) => {
  const { data, isFetching } = useForecast();
  const { dayId } = useWeatherDayId();

  const getRainProbability = id => data
    && data.length
    && data[id].rain_probability;

  const getHumidity = id => data
    && data.length
    && data[id].humidity;

  return (
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
  );
};

CurrentWeather.propTypes = {
  getTemperature: PropTypes.func.isRequired,
};
