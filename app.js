// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// evento presskey enter para agregar amigo
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("amigo");
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      agregarAmigo();
    }
  });
});

// lista de amigos
const amigos = [];

const limpiarInput = () => {
  const input = document.getElementById("amigo");
  input.value = "";
};

// agregar amigo a la lista
const agregarAmigo = () => {
  const input = document.getElementById("amigo");
  const name = input.value;

  if (name.trim() == "") {
    alert("Debe ingresar un nombre válido");
    limpiarInput();
    return;
  }
  // validar si el amigo ya existe
  if (amigos.includes(name)) {
    alert("El amigo ya existe");
    limpiarInput();
    return;
  }

  amigos.push(name);
  limpiarInput();
  actualizarLista();
};

// actualizar el DOM con la lista de amigos
const actualizarLista = () => {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
};

// reiniciar juego
const reinicar = () => {
  amigos.length = 0;
  actualizarLista();
  limpiarInput();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
};

// sortear amigo con Math.random
const sortearAmigo = () => {
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para sortear");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const numeroAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[numeroAleatorio];

  // limpiar lista de amigos
  amigos.length = 0;
  actualizarLista();

  // agregar amigo sorteado a la lista
  const li = document.createElement("li");
  li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
  resultado.appendChild(li);

//   amigos.splice(numeroAleatorio, 1);

//   if (amigos.length > 0) {
//     sortearAmigo();
//   }
};
