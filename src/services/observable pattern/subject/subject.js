export default class Subject {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }

  broadcast(data) {
    if (this._observers.length) {
      this._observers.forEach((observer) => observer.update(data));
    }
  }
}
