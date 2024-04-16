const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const cvv = document.getElementById('cvv').value;
    const fechaVencimiento = document.getElementById('fechaVencimiento').value;
    const tipo = document.getElementById('tipo').value;

    // Validar datos (igual que antes)

    const tarjeta = new Tarjeta(nombre, numero, cvv, fechaVencimiento, tipo);

    // Enviar datos al servidor usando Fetch API
    async function enviarDatosAlServidor() {
        const url = 'https://tu-servidor-web.com/registro-tarjeta'; // Reemplazar con la URL real del servidor
        const body = JSON.stringify(tarjeta); // Convertir la tarjeta a JSON
        const headers = {
            'Content-Type': 'application/json'
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                body,
                headers
            });

            const data = await response.json();
            console.log('Datos enviados exitosamente:', data);

            // Mostrar un mensaje de confirmación al usuario
            alert('Tarjeta registrada exitosamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);

            // Mostrar un mensaje de error al usuario
            alert('Error al registrar la tarjeta. Inténtalo de nuevo.');
        }
    }

    enviarDatosAlServidor();
});
