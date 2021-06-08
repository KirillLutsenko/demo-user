import React from 'react';
import PropTypes from 'prop-types';
import { useWeatherDayId } from '../../../bus/client';
import { useForecast } from '../../../bus/weather';
import './Forecast.css';

const classNames = require('classnames');
const moment = require('moment');

export const Forecast = ({ getTemperature }) => {
  const { dayId, useDayId } = useWeatherDayId();
  const { isFetching, data } = useForecast();

  return (
    <div className="forecast">
      {!isFetching
        && data
        && data.length
        && data
          .slice(0, 7)
          .map((obj, index) => (
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
  );
};

Forecast.propTypes = {
  getTemperature: PropTypes.func.isRequired,
};
