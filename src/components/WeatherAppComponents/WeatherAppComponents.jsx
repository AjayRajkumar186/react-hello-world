import React, { useState } from 'react';
import './WeatherAppComponents.css';
import axios from 'axios';

const WeatherAppComponents = () => {
  const KEY = `721a52b477d842f4950153121250611`;
  const BASE_URL = `http://api.weatherapi.com/v1`;

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const checkWeather = async (e) => {
    e.preventDefault(); // prevent page reload
    if (!city) return;

    try {
      const response = await axios.get(
        `${BASE_URL}/current.json?key=${KEY}&q=${city}`
      );
      setWeather(response.data);
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
      <h2>Check Weather Condition</h2>
      <form onSubmit={checkWeather}>
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