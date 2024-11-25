let precioViaje = 0;

// Mostrar el formulario de reserva
function verFormulario(destino, precio) {
  document.getElementById("formularioReserva").hidden = false;
  document.getElementById("destinoElegido").textContent = `Reserva a: ${destino}`;
  precioViaje = precio;

  document.getElementById("formularioReserva").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Guardar la reserva en LocalStorage
function guardar() {
  const destino = document.getElementById("destinoElegido").textContent.replace("Reserva a: ", "");
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const correo = document.getElementById("correo").value;

  if (!nombre || !edad || !correo) {
    Toastify({
      text: "Por favor, completa todos los campos.",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }).showToast();
    return;
  }

  const RESERVA = {
    destino,
    nombre,
    edad,
    correo,
  };

  localStorage.setItem("reserva", JSON.stringify(RESERVA));

  Toastify({
    text: "Reserva guardada exitosamente.",
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();

  verReservacion();
}

// Mostrar la reserva guardada
function verReservacion() {
  const RESERVA = JSON.parse(localStorage.getItem("reserva"));
  if (RESERVA) {
    document.getElementById("resultadoDeReserva").innerHTML = `
      <div id="detalles">
        <h3>Detalles de la reserva:</h3>
        <p>Destino: ${RESERVA.destino}</p>
        <p>Nombre: ${RESERVA.nombre}</p>
        <p>Edad: ${RESERVA.edad}</p>
        <p>Correo: ${RESERVA.correo}</p>
      </div>
    `;

    document.getElementById("resultadoDeReserva").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Obtener el clima de una ciudad
function obtenerClima(ciudad, contenedorId) {
  const apiKey = "89dce354994f7170c4836953cedd7e4b"; // Reemplaza con tu clave de OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error al obtener clima: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      const { main, weather } = data;
      const temperatura = main.temp.toFixed(1);
      const descripcion = weather[0].description;

      const contenedor = document.getElementById(contenedorId);
      contenedor.innerHTML += `
        <div class="clima">
          <p><strong>Clima:</strong> ${descripcion}</p>
          <p><strong>Temperatura:</strong> ${temperatura} °C</p>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error al obtener el clima:", error);
      const contenedor = document.getElementById(contenedorId);
      contenedor.innerHTML += `<p class="error">No se pudo cargar el clima</p>`;
    });
}

// Configurar el contenido al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML = `
    <div class="imgFondo"></div>
    <header>
      <p>TurismoJS</p>
      <section class="barraNavegacion">
        <nav class="navbar">
          <ul>
            <li class="inic"><a href="#">Inicio</a></li>
            <li class="paq"><a href="#">Paquetes</a></li>
            <li class="gal"><a href="#">Galeria</a></li>
            <li class="nos"><a href="#">Nosotros</a></li>
            <li class="cont"><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </section>
      <h1>Viaja con nosotros a tu próximo destino</h1>
    </header> 
    <main>
      <h2>Los mejores paquetes a los destinos turísticos más elegidos</h2>
      <section class="contenedorCards" id="DESTINOS"></section>
      <section id="formularioReserva" hidden>
        <hr>
        <h3 id="destinoElegido">Reserva para:</h3>
        <form id="formReserva">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" required><br>
          <label for="edad">Edad:</label>
          <input type="number" id="edad" required><br>
          <label for="correo">Correo electrónico:</label>
          <input type="email" id="correo" required><br>
          <button type="button" onclick="guardar()">Guardar Reserva</button>
        </form>
      </section>
      <div id="resultadoDeReserva"></div>
    </main>
    <footer></footer>
  `;

  const DESTINOS = [
    { lugar: "Playa del Carmen", texto: "Las playas más lindas de México y al mejor precio", precio: 500 },
    { lugar: "Rio de Janeiro", texto: "Uno de los destinos más visitados de Latinoamérica", precio: 450 },
    { lugar: "Miami", texto: "Conoce Miami con el mejor paquete disponible", precio: 1200 },
    { lugar: "Ibiza", texto: "Un paraíso para los amantes de la fiesta y la vida nocturna", precio: 1500 },
  ];

  const DESTINOSCONTAINER = document.getElementById("DESTINOS");
  DESTINOS.forEach((destino, index) => {
    const card = document.createElement("article");
    card.className = `card${index + 1}`;
    card.id = `destino${index + 1}`;
    card.innerHTML = `
      <h3>${destino.lugar}</h3>
      <p>${destino.texto}</p>
      <button onclick="verFormulario('${destino.lugar}', ${destino.precio})">Reservar</button>
      <div class="clima-container"></div>
    `;
    DESTINOSCONTAINER.appendChild(card);

    obtenerClima(destino.lugar, `destino${index + 1}`);
  });
});
