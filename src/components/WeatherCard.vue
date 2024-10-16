<template>
    
      <img :src="Logo" alt="Logo" class="logo" />
      <div class="weather-card">
        <div class="search-container">
          <input
            type="text"
            v-model="city"
            placeholder="Search Weather"
            @keyup.enter="searchWeather"
          />
          <button @click="searchWeather">Search</button>
        </div>
        <div v-if="weather" class="weather-info">
          <h2>
            {{ weather.name }}
            <img :src="getFlag(weather.sys.country)" alt="flag" class="country-flag" />
          </h2>
          <p class="weather-description">
            <i class="fas fa-cloud" aria-hidden="true"></i>
            {{ weather.weather[0].description }}
          </p>
          <h1>{{ weather.main.temp.toFixed(1) }} °C</h1>
          <div class="details">
            <div class="detail-item">
              <i class="fas fa-wind"></i>
              <p>Wind</p>
              <p>{{ weather.wind.speed.toFixed(1) }} m/s</p>
            </div>
            <div class="detail-item">
              <i class="fas fa-tint"></i>
              <p>Humidity</p>
              <p>{{ weather.main.humidity }}%</p>
            </div>
            <div class="detail-item">
              <i class="fas fa-cloud-sun"></i>
              <p>Clouds</p>
              <p>{{ weather.clouds.all }}%</p>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'; // Import ref and onMounted from Vue
import Logo from '../assets/logo.png';
import { getWeatherByLocation, getWeatherByCity } from '../services/weatherService';

const city = ref('');
const weather = ref(null);

function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherByLocation(lat, lon);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

function fetchWeatherByLocation(lat, lon) {
  getWeatherByLocation(lat, lon)
    .then((response) => {
      weather.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function searchWeather() {
  if (city.value) {
    getWeatherByCity(city.value)
      .then((response) => {
        weather.value = response.data;
        city.value = '';
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function getFlag(countryCode) {
  return `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`;
}

onMounted(() => {
  getLocationWeather();
});
</script>
  