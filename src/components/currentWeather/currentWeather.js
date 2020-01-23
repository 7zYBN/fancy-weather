import './currentWeather.scss';
import { source as weatherIcon } from '../weatherIcon/weatherIcon.js'; 

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class CurrentWeather {
  constructor(parent, data) {
    this._parent = document.querySelector(parent);
    this._data = data;

    this._container = document.createElement('div');
    this._location = document.createElement('p');
    this._day = document.createElement('p');
    this._weather = document.createElement('div');
    this._temperature = document.createElement('p');
    this._weatherDetails = document.createElement('div');
    this._icon = weatherIcon(this._data.currentWeather.weather[0].icon);
    this._weatherList = document.createElement('div');
    this._cloudiness = document.createElement('p');
    this._feelsLike = document.createElement('p');
    this._wind = document.createElement('p');
    this._humidity = document.createElement('p');

    this._temp = this._data.currentWeather.main.temp;

    this._build();
  }

  update(data) {
    this._temperature.innerHTML = data;
  }

  get temp() {
    return this._temp;
  }

  set temp(value) {
    this._temp = value;
    this._temperature.innerHTML = `${this._temp}°`;
  }

  _build() {
    this._createBlocks();
    this._setBlocksProperties();
  }

  _createBlocks() {
    this._createLocationBlock();
    this._createDayBlock();
    this._createWeatherBlock();
  }

  _setBlocksProperties() {
    this._setContainerProperties();
    this._setLocationBlockProperties();
    this._setDayBlockProperties();
    this._setWeatherBlockProperties();
  }

  _createLocationBlock() {
    const { city, countryInfo: country } = this._data.location;

    this._location.innerHTML = `${city}, ${country.name}`;
    this._container.appendChild(this._location);
  }

  _createDayBlock() {
    const currentDay = weekDays[new Date(this._data.currentWeather.dt * 1000).getDay()];

    this._day.innerHTML = currentDay;
    this._container.appendChild(this._day);
  }

  _createWeatherBlock() {
    this._temperature.innerHTML = `${this._temp}°`;

    this._createWeatherList();
    this._createWeatherDetails();

    this._weather.appendChild(this._temperature);
    this._weather.appendChild(this._weatherDetails);

    this._container.appendChild(this._weather);
  }

  _createWeatherList() {
    this._cloudiness.innerHTML = `cloudiness: ${this._data.currentWeather.weather[0].description}`;
    this._feelsLike.innerHTML = `feels like: ${this._data.currentWeather.main.feels_like}°`;
    this._wind.innerHTML = `wind: ${this._data.currentWeather.wind.speed} m/s`;
    this._humidity.innerHTML = `humidity: ${this._data.currentWeather.main.humidity} %`;

    this._weatherList.appendChild(this._cloudiness);
    this._weatherList.appendChild(this._feelsLike);
    this._weatherList.appendChild(this._wind);
    this._weatherList.appendChild(this._humidity);
  }

  _createWeatherDetails() {
    this._weatherDetails.appendChild(this._icon);
    this._weatherDetails.appendChild(this._weatherList);
  }

  _setWeatherBlockProperties() {
    this._weather.classList.add('weather');
    this._temperature.classList.add('weather--temperature');

    this._setWeatherListProperties();
    this._setWeatherDetailsProperties();
  }

  _setWeatherListProperties() {
    this._weatherList.classList.add('details_list');

    [...this._weatherList.childNodes].forEach((item) => {
      item.classList.add('details_list--item');
    })
  }

  _setWeatherDetailsProperties() {
    this._weatherDetails.classList.add('details');

    this._icon.classList.add('details--icon');
  }

  _setContainerProperties() {
    this._container.classList.add('current_weather');
  }

  _setLocationBlockProperties() {
    this._location.classList.add('current_weather--location');
  }

  _setDayBlockProperties() {
    this._day.classList.add('current_weather--day');
  }



  render() {
    this._parent.appendChild(this._container);
  }
}
