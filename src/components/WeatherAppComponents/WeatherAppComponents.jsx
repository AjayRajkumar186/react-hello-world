import React, { useState } from 'react';
import './WeatherAppComponents.css';
import axios from 'axios';
import weatherservice from '../../services/Weather';

const WeatherAppComponents = () => {


  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await weatherservice.getWeather(city)
      setWeather(response);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const clearInput = () => {
    setCity('');
    setWeather(null);
  };

  return (
    <div className="container-wea">
      <h3>Check Weather Condition</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        &nbsp;
        <button type="submit" className="button">Check</button>
        &nbsp;
        <button type="button" className="buttons" onClick={clearInput}>Clear</button>
      </form>

      {weather && (
        <div className="weather-result">
          <div className="weather-container">
            <div className="weather-box">
              <h3>{weather.location.name}, {weather.location.region}</h3>
              <img src={weather.current.condition.icon} alt="Weather icon" />
              <p>Temperature: {weather.current.temp_c}°C</p>
            </div>

            <div className="weather-box">
              <p>Condition: {weather.current.condition.text}</p>
            </div>

            <div className="weather-box">
              <p>Feels Like: {weather.current.feelslike_c}°C</p>
              <p>Wind: {weather.current.wind_kph} kph</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherAppComponents;