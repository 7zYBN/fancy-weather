import './dayForecast.scss';
import { source as weatherIcon } from '../weatherIcon/weatherIcon.js'; 

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default class DayForecast {
  constructor(parent = 'body', data, dayNumber) {
    this._parent = document.querySelector(parent);
    this._data = data;
    this._dayNumber = dayNumber;
    this._container = document.createElement('div');
    this._weekDayName = document.createElement('p');
    this._forecast = document.createElement('div');
    this._temperature = document.createElement('p');
    
    this._build();
  }
  
  get temp() {
    return this._day.main.temp;
  }

  _build() {
    this._createWeatherBlock();
    this._setProperties();
  }

  _createWeatherBlock() {
    const currentDay = new Date(this._data.currentWeather.dt * 1000).getDay();
    
    const days = this._data.forecast.list.filter(item => {
      const dtDate = new Date(item.dt * 1000);
      const txtDate = new Date(item.dt_txt);
      const hours = dtDate.getHours();
      const day = txtDate.getDay();

      return hours === 12 && day !== currentDay;
    });

    const nights = this._data.forecast.list.filter(item => {
      const dtDate = new Date(item.dt * 1000);
      const txtDate = new Date(item.dt_txt);
      const hours = dtDate.getHours();
      const day = txtDate.getDay();

      return hours === 0 && day !== currentDay;
    });


    this._day = days[this._dayNumber];
    this._night = nights[this._dayNumber];

    this._temperature.innerHTML = `Midday temp: ${this._round(this._day.main.temp)}°\nMidnight temp: ${this._round(this._night.main.temp)}°`;

    this._icon = weatherIcon(this._day.weather[0].icon);

    this._forecast.appendChild(this._temperature);
    this._forecast.appendChild(this._icon);
  }

  _round(number) {
    const result = Math.abs(number) + 0.5;
    
    return number > 0 ? Math.round(number) : `-${Math.floor(result)}`;
  }

  _setProperties() {
    const date = new Date(this._day.dt * 1000);

    this._weekDayName.innerHTML = weekDays[date.getDay()];

    this._container.classList.add('single_day');
    this._weekDayName.classList.add('single_day--weekday');
    this._forecast.classList.add('forecast');
    this._temperature.classList.add('forecast--temperature');
    this._icon.classList.add('forecast--icon');
  }

  render() {
    this._container.appendChild(this._weekDayName);
    this._container.appendChild(this._forecast);

    this._parent.appendChild(this._container);
  }
}
