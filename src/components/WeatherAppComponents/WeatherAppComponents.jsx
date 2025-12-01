import React, { useEffect, useState } from 'react';
import './WeatherAppComponents.css';
import axios from 'axios';

const WeatherAppComponents = () => {
  const KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [locationData, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  // Get user location once on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setUserLocation(coords);
        fetchWeather(`${coords.latitude},${coords.longitude}`);
      });
    }
  }, []);

  // Unified function for fetching weather
  const fetchWeather = async (city) => {
    try {
      let response;

      if (!city && userLocation) {
        response = await axios.get(
          `${BASE_URL}/current.json?key=${KEY}&q=${userLocation.latitude},${userLocation.longitude}`
        );
      } else {
        // Otherwise, use the city name
        response = await axios.get(
          `${BASE_URL}/current.json?key=${KEY}&q=${city}`
        );
      }

      setWeather(response.data.current);
      setLocation(response.data.location);
    } catch (err) {
      console.error("Error fetching weather data:");
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCitySearch = () => {
    if (city) {
      fetchWeather(city);
    } 
  };

  const clearInput = () => {
    setCity('');
    setWeather(null);
    setLocation(null);
  };

  return (
    <div className="container-wea">
      <h1>Check Weather Condition</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button id="check-btn" onClick={handleCitySearch}>
          Check
        </button>
        <button type="button" onClick={clearInput}>
          Clear
        </button>
      </div>

      {locationData && weather && (
        <div className="weather-result">
          <div className="weather-container">
            <div className="weather-box">
              <h3>
                {locationData.name}, {locationData.region}
              </h3>
              <img
                src={weather.condition.icon}
                alt={weather.condition.text}
              />
              <p>Temperature: {weather.temp_c}°C</p>
            </div>

            <div className="weather-box">
              <p>Condition: {weather.condition.text}</p>
            </div>

            <div className="weather-box">
              <p>Feels Like: {weather.feelslike_c}°C</p>
              <p>Wind: {weather.wind_kph} kph</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherAppComponents;