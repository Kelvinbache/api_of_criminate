import { Tags } from "./index.js";

class Api {
  constructor(api) {
    this._api = fetch(api);
  }

  async dataOfApi() {
    const requests = await this._api;
    return requests.json();
  }

  get answer() {
    this.items = this.dataOfApi().then((data) => data.items);
    return this.items;
  }
}

const wanted = new Api("https://api.fbi.gov/wanted/v1/list");
const items = new Tags('https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D')
items.createElements
// trabajar en la herencia de datos entre class
// recorrido de datos
