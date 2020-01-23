import './controlBlock.scss';
import LanguageSelector from './languageSelector/languageSelector';
import Refresher from './refresher/refresher';
import Search from './search/search';
import TemperatureUnitsToggler from './temperatureUnitsToggler/temperatureUnitsToggler';

export default class ControlBlock {
  constructor(parent = 'body') {
    this._parent = document.querySelector(parent);
    this._controlBlock = document.createElement('div');

    this._build();
  }

  getCurrentUnit() {
    return this._unitsToggler.currentUnit;
  }

  addListener(listener) {
    this._unitsToggler.addListener(listener);
  }

  _build() {
    this._controlBlock.classList.add('control-block');
    this._parent.appendChild(this._controlBlock);
    this._search = new Search(`.${this._controlBlock.className}`);
    this._refresher = new Refresher(`.${this._controlBlock.className}`);
    this._unitsToggler = new TemperatureUnitsToggler(`.${this._controlBlock.className}`, ['C', 'F', 'K']);
    this._dropDown = new LanguageSelector(`.${this._controlBlock.className}`);
  }

  render() {
    this._search.render();
    this._refresher.render(); 
    this._unitsToggler.render();
    this._dropDown.render();  
  }
}
