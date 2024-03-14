const crearTarjeta = () => {
  const imagenContenedor = document.createElement("img");
  imagenContenedor.className = "img";
  const imagen = document.createElement("img");
  imagen.src = "./assets/images/avatar-jessica.jpeg";
  const cuadro = document.createElement("div");
  cuadro.className = "cuadro";
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  const h1 = document.createElement("h1");
  const texto1 = document.createTextNode("Jessica Randall");
  h1.appendChild(texto1);
  const h2 = document.createElement("h2");
  const texto2 = document.createTextNode("London, United Kingdom");
  h2.appendChild(texto2);
  const h3 = document.createElement("h3");
  const texto3 = document.createTextNode("Front-end developer and avid reader");
  h3.appendChild(texto3);

  cuadro.appendChild(imagenContenedor);
  imagenContenedor.appendChild(imagen);
  cuadro.appendChild(buttonContainer);

  const boton1 = document.createElement("button");
  const textoBoton1 = document.createTextNode("Github");
  boton1.appendChild(textoBoton1);
  const boton2 = document.createElement("button");
  const textoBoton2 = document.createTextNode("Frontend Mentor");
  boton2.appendChild(textoBoton2);
  const boton3 = document.createElement("button");
  const textoBoton3 = document.createTextNode("LinkedIn");
  boton3.appendChild(textoBoton3);
  const boton4 = document.createElement("button");
  const textoBoton4 = document.createTextNode("Twitter");
  boton4.appendChild(textoBoton4);
  const boton5 = document.createElement("button");
  const textoBoton5 = document.createTextNode("Instagram");
  boton5.appendChild(textoBoton5);

  buttonContainer.appendChild(boton1);
  buttonContainer.appendChild(boton2);
  buttonContainer.appendChild(boton3);
  buttonContainer.appendChild(boton4);
  buttonContainer.appendChild(boton5);

  const container = document.createElement("div");
  container.appendChild(cuadro);

  const mountNode = document.querySelector("#app");
  const addCardButton = document.querySelector("button");
  const addCard=()=>{
    mountNode.appendChild(crearTarjeta())
    console.log("Tarjeta creada")
}

addCardButton.addEventListener('click', addCard)
};