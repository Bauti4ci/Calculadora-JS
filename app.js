const inputNumero = document.getElementById('input');

let getHistorial = []

localStorage.setItem("historial", JSON.stringify(getHistorial))

function agregarValorAlInput(valor) {
    const valorActual = inputNumero.value;
    inputNumero.value = valorActual + valor;
}

document.getElementById('1').addEventListener('click', () => agregarValorAlInput(1));
document.getElementById('2').addEventListener('click', () => agregarValorAlInput(2));
document.getElementById('3').addEventListener('click', () => agregarValorAlInput(3));
document.getElementById('4').addEventListener('click', () => agregarValorAlInput(4));
document.getElementById('5').addEventListener('click', () => agregarValorAlInput(5));
document.getElementById('6').addEventListener('click', () => agregarValorAlInput(6));
document.getElementById('7').addEventListener('click', () => agregarValorAlInput(7));
document.getElementById('8').addEventListener('click', () => agregarValorAlInput(8));
document.getElementById('9').addEventListener('click', () => agregarValorAlInput(9));
document.getElementById('0').addEventListener('click', () => agregarValorAlInput(0));
document.getElementById('n.').addEventListener('click', () => agregarValorAlInput('.'));

function agregarOperador(operador) {
    const valorActual = inputNumero.value;
    inputNumero.value = valorActual + operador;
}

document.getElementById('botonSuma').addEventListener('click', () => agregarOperador('+'));
document.getElementById('botonResta').addEventListener('click', () => agregarOperador('-'));
document.getElementById('botonMultiplicacion').addEventListener('click', () => agregarOperador('*'));
document.getElementById('botonDivision').addEventListener('click', () => agregarOperador('/'));
document.getElementById('porcentaje').addEventListener('click', () => agregarOperador('*0.'));


function calcularResultado() {
    try {
        const expresion = inputNumero.value;

        const resultado = eval(expresion);

        console.log(inputNumero.value + " = " + resultado)

        let newHistorial = JSON.parse(localStorage.getItem("historial"))

        newHistorial.push(inputNumero.value + " = " + resultado)

        localStorage.setItem("historial", JSON.stringify(newHistorial))

        inputNumero.value = resultado;

        mostrarHistorial()
    } catch (error) {
        console.error('Error al evaluar la expresión:', error.message);
    }
}

document.getElementById('botonIgual').addEventListener('click', calcularResultado);

function borrarContenido() {
    inputNumero.value = '';
}

document.getElementById('vaciar').addEventListener('click', borrarContenido);

function borrarUltimoCaracter() {
    const valorActual = inputNumero.value;
    inputNumero.value = valorActual.slice(0, -1);
}

document.getElementById('del').addEventListener('click', borrarUltimoCaracter);

const boton = document.getElementById('historialb');
const div = document.getElementById('historial');


boton.addEventListener('click', () => {
    if (div.style.display === 'none') {
        div.style.display = 'inline-block'; // Muestra el div

    } else {
        div.style.display = 'none'; // Oculta el div
    }
});

function mostrarHistorial() {

    let lista = document.getElementById("listaHistorial")
    lista.innerHTML = " "
    let historial = JSON.parse(localStorage.getItem("historial"))
    historial.map((e) => {
        let div = document.createElement("div")
        let valor = document.createTextNode(e)
        div.appendChild(valor)
        lista.appendChild(div)
    });
}

const botonParentesis = document.getElementById('botonParentesis');
let parentesisAbierto = false;

botonParentesis.addEventListener('click', () => {
    if (parentesisAbierto) {
        inputNumero.value += ')';
        parentesisAbierto = false;
    } else {
        inputNumero.value += '(';
        parentesisAbierto = true;
    }
});
