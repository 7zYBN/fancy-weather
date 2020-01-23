import './app.scss';
import Components from './components';
import Services from './services';

export default class App {
  async _build() {
    const response = await this._runServices();

    this._setAppBackgroundImage(response);

    this._components = new Components(response);
    // this._components = new Components();
  }

  _setAppBackgroundImage({ backgroundImage }) {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }

  _runServices() {
    const services = new Services();

    return services.load(); 
  }

  async render() {
    await this._build();
    this._components.render();
  }
}
