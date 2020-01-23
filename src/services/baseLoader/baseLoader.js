export default class BaseLoader {
  async getData(url) {
    const response = await fetch(url);
    
    return response.json();
  }
}