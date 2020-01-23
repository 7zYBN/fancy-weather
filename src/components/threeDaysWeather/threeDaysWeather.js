import './threeDaysForecast.scss';
import DayForecast from "./dayForecast";

export default class ThreeDaysWeather {
  constructor(parent = 'body', data) {
    this._parent = document.querySelector(parent);
    this._data = data;
    this._daysCount = 3;
    this._container = document.createElement('div');

    this._build();
  }

  get temp() {
    return this._forecast.map((singleDay) => singleDay.temp);
  }

  _build() {

  }

  _createForecast() {
    this._forecast = new Array(this._daysCount).fill(null);

    this._forecast = this._forecast.map((_, index) => new DayForecast(`.${this._container.className}`, this._data, index));
  }

  render() {
    this._container.classList.add('three_days_forecast');
    this._parent.appendChild(this._container);
    this._createForecast();
    
    this._forecast.forEach((singleDay) => {
      singleDay.render();
    })
  }
}
