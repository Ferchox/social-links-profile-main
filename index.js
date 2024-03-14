const crearTarjeta = () => {
  const cuadro = document.createElement("div");
  cuadro.className = "cuadro";

  const imagenContenedor = document.createElement("div");
  imagenContenedor.className = "img";
  const imagen = document.createElement("img");
  imagen.src = "./assets/images/avatar-jessica.jpeg";
  imagenContenedor.appendChild(imagen);
  cuadro.appendChild(imagenContenedor);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const h1 = document.createElement("h1");
  h1.textContent = "Jessica Randall";
  const h2 = document.createElement("h2");
  h2.textContent = "London, United Kingdom";
  const h3 = document.createElement("h3");
  h3.textContent = "Front-end developer and avid reader";

  buttonContainer.appendChild(h1);
  buttonContainer.appendChild(h2);
  buttonContainer.appendChild(h3);

  const botonesTexto = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  for (const textoBoton of botonesTexto) {
    const boton = document.createElement("button");
    boton.textContent = textoBoton;
    buttonContainer.appendChild(boton);
  }

  cuadro.appendChild(buttonContainer);

  return cuadro;
};

const mountNode = document.querySelector("#app");
const addCardButton = document.querySelector("#nuevoBoton");

const addCard = () => {
  mountNode.appendChild(crearTarjeta());
  console.log("Tarjeta creada");
};

addCardButton.addEventListener("click", addCard);
