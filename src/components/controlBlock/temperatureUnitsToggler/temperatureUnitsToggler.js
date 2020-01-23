import './temperatureUnitsToggler.scss';
import Subject from "../../../services/observable pattern/subject/subject";

const defaultClassName = 'units_list--unit';
const selectedClassName = `${defaultClassName}-selected`;

export default class TemperatureUnitsToggler extends Subject {
  constructor(parent, units) {
    super();

    this._units = units;

    this._parent = document.querySelector(parent);
    this._list = document.createElement('ul');

    this._build();
  }

  get currentUnit() {
    const listItems = [...this._list.childNodes];

    return listItems.find((unit) => unit.classList.contains(selectedClassName));
  }

  addListener(listener) {
    this._list.addEventListener('click', (event) => {
      const isListItem = event.target.closest(`.${defaultClassName}`);

      if (isListItem && isListItem !== this.currentUnit) {
        listener(event.target);
        this._changeStyle(event);
      }
    });
  }

  _build() {
    this._createUnitsList();
    this._setListProperties();
  }

  _createUnitsList() {
    this._units.forEach((unit, unitIndex) => {
      const listItem = document.createElement('li');

      listItem.innerHTML = unit;
      this._setListItemProperties(listItem, unitIndex);
      this._list.appendChild(listItem);
    })
  }

  _setListProperties() {
    this._list.classList.add('units_list');
  }

  _setListItemProperties(listItem, unitIndex) {
    const classList = [ defaultClassName ];

    if (!unitIndex) classList.push(selectedClassName);

    listItem.classList.add(...classList);
  }

  _changeStyle(event) {
    this.currentUnit.classList.remove(selectedClassName);
    event.target.classList.add(selectedClassName);
  }

  render() {
    this._parent.appendChild(this._list);
  }
}
