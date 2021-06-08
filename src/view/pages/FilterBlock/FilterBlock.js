import React from 'react';
import './FilterBlock.css';
import { TemperatureInputs } from './TemperatureInputs';
import { TypeOfWeather } from './TypeOfWeather.js/TypeOfWeather';

export const FilterBlock = () => (
  <div className="filter">
    <TypeOfWeather />
    <TemperatureInputs />
  </div>
);
