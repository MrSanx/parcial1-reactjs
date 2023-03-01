//Variables
let primerValor = "";
let segundoValor = "";
let tipoOperacion = "";
let puntoUsado1 = false;
let puntoUsado2 = false;


document.addEventListener('keydown', function (event) {
    const keyPressed = event.key;
    //alert(keyPressed)
    if (['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(String(keyPressed))) {
        numeroNuevo(keyPressed);
    } else if ((['+', '-', '*', '/'].includes(String(keyPressed)))) {
        operacion(keyPressed);
    } else if ((['=', 'Enter'].includes(String(keyPressed)))) {
        resultado();
    } else if ((['Backspace'].includes(String(keyPressed)))) {
        eliminarNumero();
    } else {
        //Podría poner un trycatch pero no se como era en javascript
    }
});

function numeroNuevo(numero) {
    if (tipoOperacion == "" && numero != '.') {
        primerValor += numero;
    } else if (tipoOperacion == "" && puntoUsado1 == false) {
        primerValor += numero;
        puntoUsado1 = true;
    } else if (numero != '.') {
        segundoValor += numero;
    } else if (puntoUsado2 == false) {
        segundoValor += numero;
        puntoUsado2 = true;
    }
    document.getElementById("resultado").value = (primerValor + " " + tipoOperacion + " " + segundoValor);
}

function eliminarNumero() {
    if (tipoOperacion == "") {
        primerValor = primerValor.slice(0, -1);
    } else {
        segundoValor = segundoValor.slice(0, -1);
    }
    document.getElementById("resultado").value = (primerValor + " " + tipoOperacion + " " + segundoValor);
}

function operacion(opera) {
    if (opera == '+') {
        tipoOperacion = "+";
    } else if (opera == '-') {
        tipoOperacion = "-";
    } else if (opera == '/') {
        tipoOperacion = "/";
    } else {
        tipoOperacion = "x";
    }
    document.getElementById("resultado").value = (primerValor + " " + tipoOperacion + " " + segundoValor);
}

function limpiar() {
    primerValor = "";
    segundoValor = "";
    tipoOperacion = "";
    puntoUsado1 = false;
    puntoUsado2 = false;
    document.getElementById("resultado").value = (primerValor + " " + tipoOperacion + " " + segundoValor);
}

function resultado() {
    primerValor = parseFloat(primerValor);
    segundoValor = parseFloat(segundoValor);

    if (tipoOperacion == "x") {
        document.getElementById("resultado").value = (primerValor * segundoValor);
    } else if (tipoOperacion == "/") {
        document.getElementById("resultado").value = (primerValor / segundoValor);
    } else if (tipoOperacion == "+") {
        document.getElementById("resultado").value = (primerValor + segundoValor);
    } else {
        document.getElementById("resultado").value = (primerValor - segundoValor);
    }

    primerValor = "";
    segundoValor = "";
    tipoOperacion = "";
    puntoUsado1 = false;
    puntoUsado2 = false;
}