import './mapBox.scss';

const mapBoxToken = 'pk.eyJ1IjoiN3p5Ym4iLCJhIjoiY2s1ZnZmaGZ5MDE2cDNlcGdtNjNodHR5dyJ9.cBlzIxE_1MPraD0g_kjmFg';
const mapBoxStyle = 'mapbox://styles/7zybn/ck5fvzlr601yd1iobux3w6nzo';

export default class MapBox {
  constructor(parent = 'body', data) {
    this._parent = document.querySelector(parent);
    this._data = data;

    this._build();
  }

  _build() {
    this._buildContainer();
    this._setMapOptions();
  }

  _buildContainer() {
    this._container = document.createElement('div');
    this._container.setAttribute('id', 'map_box');
  }

  _setMapOptions() {
    const { latitude, longitude } = this._data.location.coords;

    mapboxgl.accessToken = mapBoxToken;

    this._mapOptions = {
      container: this._container.id,
      style: mapBoxStyle,
      center: [ longitude, latitude ],
      zoom: 9
    }
  }

  render() {
    this._parent.appendChild(this._container);

    new mapboxgl.Map(this._mapOptions);
  }
}
