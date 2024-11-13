
function verFormulario(destino) {
    document.getElementById('formularioReserva').hidden = false;
    document.getElementById('destinoElegido').textContent = `Reserva a: ${destino}`;
}


function guardar() {
    const destino = document.getElementById('destinoElegido').textContent.replace('Reserva a: ', '');
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const correo = document.getElementById('correo').value;
    
    const RESERVA = {
        destino,
        nombre,
        edad,
        correo
    };
    
    localStorage.setItem('reserva', JSON.stringify(RESERVA));
    
    verReservacion();
}


function verReservacion() {
    const RESERVA = JSON.parse(localStorage.getItem('reserva'));
    if (RESERVA) {
        document.getElementById('detalles').innerHTML = `
            <p>Destino: ${RESERVA.destino}</p>
            <p>Nombre: ${RESERVA.nombre}</p>
            <p>Edad: ${RESERVA.edad}</p>
            <p>Correo: ${RESERVA.correo}</p>
        `;
    }
}


document.addEventListener("DOMContentLoaded", function() {
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
        <h1>Viaja con nosotros a tu proximo destino</h1>
    </header> 
    <main>
        <h2>Los mejores paquetes a los destinos turisticos más elegidos</h2>
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
        <h3>Detalles de la reserva:</h3>
        <section id="detalles"></section>
    </main>
    <footer>

    </footer>
    `;

    const DESTINOS = [
        {
            lugar: "Playa del carmen", 
            texto: "Las playas más lindas de México y al mejor precio"
        },
        {
            lugar: "Río de janeiro",
            texto: "Uno de los destinos más visitados de Latinoamérica, entérate de todo lo que necesitas saber"
        },
        {
            lugar: "Miami",
            texto: "Viaja con nosotros a conocer Miami, con el mejor paquete disponible en el mercado"
        },
        {
            lugar: "Ibiza",
            texto: "Un paraíso para los amantes de la fiesta y la vida nocturna"
        }
    ];

    const DESTINOSCONTAINER = document.getElementById('DESTINOS');
    DESTINOS.forEach(destino => {
        const cardDestino = document.createElement('article');
        cardDestino.innerHTML = `
            <h3>${destino.lugar}</h2>
            <p>${destino.texto}</p>
            <button onclick="verFormulario('${destino.lugar}')">Reservar</button>
        `;
        DESTINOSCONTAINER.appendChild(cardDestino);
    });
});





