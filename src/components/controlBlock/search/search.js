import './search.scss';

export default class Search {
  constructor(parentSelector = 'body', placeholder = 'Find', buttonText = 'Search') {
    this._placeholder = placeholder;
    this._buttonText = buttonText;

    this._elements = {
      parent: document.querySelector(parentSelector),
      container: document.createElement('div'),
      searchInput: document.createElement('input'),
      searchButton: document.createElement('button')
    }

    this._build();
  }

  _build() {
    this._setPropertiesAndValues();
  }

  _setPropertiesAndValues() {
    this._setContainerProperties();
    this._setSearchInputProperties();
    this._setSearchButtonProperties();
  }

  _setContainerProperties() {
    const { container } = this._elements;

    container.classList.add('search');
  }

  _setSearchInputProperties() {
    const { searchInput } = this._elements;

    searchInput.placeholder = this._placeholder;
    searchInput.classList.add('search--input');
  }

  _setSearchButtonProperties() {
    const { searchButton } = this._elements;

    searchButton.classList.add('search--button');
    searchButton.innerHTML = this._buttonText;
  }

  render() {
    const { parent, container, searchButton, searchInput } = this._elements;

    container.appendChild(searchInput);
    container.appendChild(searchButton);
    parent.appendChild(container);
  }
}
