import './refresher.scss';

export default class Refresher {
  constructor(parent) {
    this._parent = document.querySelector(parent);
    this._container = document.createElement('div');
    this._refreshIcon = document.createElement('i');

    this._build();
  }

  _build() {
    this._setProperties();
  }

  _setProperties() {
    this._setContainerProperties();
    this._setRefreshIconProperties();
  }

  _setContainerProperties() {
    this._container.classList.add('refresher');
  }

  _setRefreshIconProperties() {
    this._refreshIcon.classList.add('fas', 'fa-sync-alt');
  }

  render() {
    this._container.appendChild(this._refreshIcon);
    this._parent.appendChild(this._container);
  }
}
