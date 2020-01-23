import { restCountry } from "./countryInfoLoader.config";
import BaseLoader from "../baseLoader/baseLoader";

export default class CountyInfoLoader extends BaseLoader {
  getCountryInfo(countryAlphaCode) {
    const url = restCountry(countryAlphaCode);

    return this.getData(url);
  }
}