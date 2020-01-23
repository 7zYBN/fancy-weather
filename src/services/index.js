import WeatherLoader from './weatherLoader/weatherLoader';
import CurrentLocationGetter from './currentLocationGetter/currentLocationGetter';
import ImageLoader from './imageLoader/imageLoader';
import CountyInfoLoader from './countryInfoLoader/countryInfoLoader';

export default class Services {
  constructor() {
    this._init();
  }

  _init() {
    this._imageLoader = new ImageLoader();
    this._locationGetter = new CurrentLocationGetter();
    this._weatherLoader = new WeatherLoader();
    this._countryInfoLoader = new CountyInfoLoader();
  }

  _convertLocation(loc) {
    const location = loc.split(',');
    const [ latitude, longitude ] = location;

    return { latitude, longitude };
  }

  _getSeason(unixFormatDate) {
    const currentMonth = new Date(unixFormatDate * 1000).getMonth();

    const seasons ={
      winter: [11, 0 , 1],
      spring: [2, 3 , 4],
      summer: [5, 6 , 7],
      autumn: [8, 9 , 10]
    }

    const seasonsKeys = Object.keys(seasons);

    const currentSeason = seasonsKeys.filter((season) => {
      const monthsArray = seasons[season];

      return monthsArray.indexOf(currentMonth) !== -1;
    })

    return `${currentSeason}`;
  }

  async load() {
    const { _imageLoader, _locationGetter, _weatherLoader, _countryInfoLoader } = this;

    const { loc, city, country } = await _locationGetter.getLocation();
    const location = this._convertLocation(loc);

    const currentWeather = await _weatherLoader.getCurrentWeather(location);
    const countryInfo = await _countryInfoLoader.getCountryInfo(country);
    const forecast = await _weatherLoader.getForecast(location);

    const { dt: unixFormatDate, weather } = currentWeather;
    const currentSeason = this._getSeason(unixFormatDate);

    const { urls: {regular: backgroundImage} } = await _imageLoader.getImage(city, currentSeason, weather[0].main);
    
    return { location: { coords: location, city, countryInfo}, currentWeather, forecast, backgroundImage };
  }
}
