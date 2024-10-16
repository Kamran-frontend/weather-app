# Weather App

A responsive weather app built with Vue.js that provides current weather conditions. Users can search for cities or ZIP codes and view weather details in a visually appealing tile format.

## Features

- Search for weather by city name or ZIP code
- Display current weather conditions
- Responsive design for optimal viewing on various devices
- Displays country flags based on the city location

## Tech Stack

- Vue.js
- Axios (for API requests)
- OpenWeatherMap API (for weather data)
- CSS (for styling)

## Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/Kamran-frontend/weather-app.git
cd weather-app
```


### Install Dependencies

```bash
npm install
```

### Get Your API Key

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api).
2. Create an API key from your dashboard.

### Configure the API Key

Replace `YOUR_API_KEY` in `src/services/weatherService.js` with your actual API key:

```javascript
const API_KEY = "YOUR_API_KEY"; // Replace with your API key
```

### Run the App

```bash
npm run serve
```

Open your browser and navigate to `http://localhost:8080` (or the port specified in the terminal) to view the app.

## Usage

1. Enter a city name or ZIP code in the search bar.
2. Press "Enter" or click the "Search" button to fetch the weather data.
3. View the current weather conditions and 10-day forecast displayed below.


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/api) for providing weather data.
- [Vue.js](https://vuejs.org/) for the framework.
