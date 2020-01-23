import { unsplash } from "./imageLoader.config";
import BaseLoader from "../baseLoader/baseLoader";

export default class ImageLoader extends BaseLoader {
  getImage(...queries) {
    const url = unsplash(queries);

    return this.getData(url);
  }
}
