function adoptar(nombre) {
  alert("🐾 Has iniciado adopción de " + nombre);
}

function favorito(nombre) {
  alert("❤️ " + nombre + " agregado a favoritos");
}

function mensajeGeneral() {
  alert("Gracias por apoyar a los animales 🐶❤️");
}

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Completa todos los campos");
    return false;
  }

  alert("Mensaje enviado correctamente ❤️");
  return true;
}

function buscar() {
  let input = document.getElementById("buscador").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    let texto = cards[i].innerText.toLowerCase();

    if (texto.includes(input)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}