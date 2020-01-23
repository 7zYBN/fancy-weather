import './languageSelector.scss';

export default class LanguageSelector {
  constructor(parent) {
    this._parent = document.querySelector(parent);
    this._languages = ['EN', 'RU'];

    this._dropDown = document.createElement('select');

    this._build();
  }

  _build() {
    this._createDropDown();
    this._setDropDownProperties();
  }

  _createDropDown() {
    this._languages.forEach(language => {
      const option = document.createElement('option');

      option.innerHTML = language;
      this._setOptionProperty(option);
      this._dropDown.appendChild(option);
    })
  }

  _setDropDownProperties() {
    this._dropDown.classList.add('languages_dropdown');
  }

  _setOptionProperty(option) {
    option.classList.add('languages_dropdown--language');
  }

  render() {
    this._parent.appendChild(this._dropDown);
  }
}
