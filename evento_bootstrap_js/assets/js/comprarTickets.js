//Asignación de función a evento del botón
btnCalcular.addEventListener('click', calcularTotal);
btnBorrar.addEventListener('click', borrarTotal);

// Función para reseter total en formulario:
function borrarTotal() {
    total.innerHTML = "Total a Pagar: $ ";
}

//Función para calcular total a pagar:
function calcularTotal() {
    //Obtención de valores del formulario
    var nombreIngresado = document.getElementById("nombre").value;
    var apellidoIngresado = document.getElementById("apellido").value;
    var emailIngresado = document.getElementById("email").value;
    var cantidadTickets = parseInt(document.getElementById("cantidad").value);
    var categoriaSeleccionada = parseInt(document.getElementById("categoria").value);

    //Verificación de valores:
    if (nombreIngresado === "") {
        alert("Debe ingresar el nombre !!!");
        return;
    }
    
    if (apellidoIngresado === "") {
        alert("Debe ingresar el apellido !!!");
        return;
    }

    if (emailIngresado === "") {
        alert("Debe ingresar el email!!!");
        return;
    }

    if (cantidadTickets < 1 || isNaN(cantidadTickets)) {
        alert("Debe ingresar la cantidad de tickets!!!");
        return;
    }

    if (categoriaSeleccionada < 1) {
        alert("Debe seleccionar la categoría!!!");
        return;
    }

    //Cálculos del importe a pagar
    var importe = 0;
    if (categoriaSeleccionada == 1) {
        importe = (cantidadTickets * 200) * 0.20;
    }

    if (categoriaSeleccionada == 2) {
        importe = (cantidadTickets * 200) * 0.50;
    }

    if (categoriaSeleccionada == 3) {
        importe = (cantidadTickets * 200) * 0.85;
    }

    //escritura en objeto HTML
    total.innerHTML = "Total a Pagar: $" + importe;
}

