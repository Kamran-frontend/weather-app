import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByLocation = (lat, lon) => {
  return axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
};

export const getWeatherByCity = (city) => {
  return axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
};
