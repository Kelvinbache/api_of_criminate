export class Tags {
  constructor(item) {
    this.item = item;
  }

 get createElements() {
    const img = document.createElement("img");
    img.src = this.item;
    this.FormData(img);
  }

  FormData(element) {
    const container = document.getElementById("container");
    container.appendChild(element);
  }
}

/**
 * lista de cosas por hacer:
 * 1) Hacer una class padre que tenga la api
 * 2) Intentar hacer una herencia y recibir los datos
 * 3) hacer una estructura muy basica para mostrar los datos json
 */
