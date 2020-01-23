import { ipInfo } from "./currentLocation.config";
import BaseLoader from "../baseLoader/baseLoader";

export default class CurrentLocationGetter extends BaseLoader {
  getLocation() {
    const { url } = ipInfo;
    
    return this.getData(url);
  }
}
