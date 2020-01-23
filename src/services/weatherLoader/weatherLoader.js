import { openWeather } from "./weatherLoader.config";
import BaseLoader from "../baseLoader/baseLoader";

export default class WeatherLoader extends BaseLoader {
  getCurrentWeather(location) {
    return this._getWeather(location, 'current');
  }

  getForecast(location) {
    return this._getWeather(location, 'forecast');
  }

  _getWeather(location, type) {
    const url = openWeather(location, type);

    return this.getData(url);
  }
}
