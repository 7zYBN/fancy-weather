const restCountriesUrl = 'https://restcountries.eu/rest/v2/alpha';

export const restCountry = (alphaCode) => {
  return `${restCountriesUrl}/${alphaCode}`
}
