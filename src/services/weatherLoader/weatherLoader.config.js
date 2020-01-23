const openWeatherRoot = 'https://api.openweathermap.org/data/2.5';
const openWeatherKey = '3603fadaadd944e17ef375b784059be3';

const types = {
  current: `weather`,
  forecast: `forecast`
}

export const openWeather = ({ latitude, longitude }, weatherType) => {
  const type = types[weatherType];

  return `${openWeatherRoot}/${type}?lat=${latitude}&lon=${longitude}&units=metric&appid=${openWeatherKey}`;
}
