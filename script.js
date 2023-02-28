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

    } else if ((['=', 'Enter'].includes(String(keyPressed)))) {
        
    } else if ((['Backspace'].includes(String(keyPressed)))) {

    } else {

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

function tipoOperacion(operacion) {
    
}