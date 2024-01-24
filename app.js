let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let nuermoMaximo = 10;

function asignarTextoElemento(eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Lo intentaste ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuiario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
                asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*nuermoMaximo)+1; 



        console.log(numeroGenerado);
        console.log(listaDeNumeros);
        //si ya sorteamos todos los numeros
        if (listaDeNumeros.length == nuermoMaximo) {
            asignarTextoElemento('p','ya has jugado todas la veces posibles');
        } else {
        //si el numero genrado esta esta en la lista
        if (listaDeNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaDeNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Secret Game');
    asignarTextoElemento('p',`indica un numero del 1 al ${nuermoMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indidicar mensaje de inico de interbalo de numeros
    //generar el numero aleatoreo nuevamente
    //reiniciar el numero de intentos
    condicionesIniciales();
    //dejar el boton de nuevo juego desabilitado nuevamante
    document.querySelector('#reiniciar').setAttribute('disabled','treu');
}

condicionesIniciales();
