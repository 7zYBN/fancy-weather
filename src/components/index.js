import ControlBlock from './controlBlock';
import MapBox from './mapBox/mapBox';
import CurrentWeather from './currentWeather/currentWeather';
import ThreeDaysWeather from './threeDaysWeather/threeDaysWeather';

export default class Components {
  constructor(data) {
    console.log(data)
    this._data = data;

    this._build();
    this._setListener();
  }

  _build() {
    this._controlBlock = new ControlBlock('body');
    this._currentWeather = new CurrentWeather('body', this._data);
    this._threeDaysWeather = new ThreeDaysWeather('body', this._data);
    this._mapBox = new MapBox('body', this._data);
  }

  _setListener() {
    this._controlBlock.addListener(this._changeTemperature.bind(this));
  }

  _changeTemperature(newUnit) {
    const currentTemperature = this._currentWeather.temp;
    const forecastTemperature = this._threeDaysWeather.temp;

    const currentUnit = this._controlBlock.getCurrentUnit();

    const { innerHTML: oldValue } = currentUnit;
    const { innerHTML: newValue } = newUnit;
    const key = `${oldValue} to ${newValue}`;
    const formulas = {
      'F to C': (currentTemperature - 32) * 5 / 9,
      'C to F': currentTemperature * 9 / 5 + 32,
    }
    console.log(forecastTemperature)
    console.log(formulas[key])
    this._currentWeather.temp = formulas[key];
  }

  render() {
    this._controlBlock.render();
    this._currentWeather.render();
    this._threeDaysWeather.render();
    this._mapBox.render();
  }
}
