class Api {
  constructor(api) {
    this._api = fetch(api);
  }

  async dataOfApi() {
    const requests = await this._api.then((data) => this.answer(data));
  }

  answer(data) {
     return data
  }
}

const wanted = new Api("https://api.fbi.gov/wanted/v1/list");
console.log(wanted.answer());


//trabajar en la herencia de datos entre class