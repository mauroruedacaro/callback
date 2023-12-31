/*
CALLBACKS
Un callback es una función que se pasa como argumento
a otra función y que se invoca o "llama de vuelta"
después de que se completa cierta tarea o sucede un cierto evento.

function miFuncWithCallback(callback) {
    // some code
    callback();
}
*/


// Los callbacks los han lelgado a ver por ejemplo en los metodos de
// los arreglos de ES6 o en el más común como operaciones asincronas como el setTimeout
[1, 2, 3].map((item) => item * 2); // output: [2, 4, 6]
setTimeout(() => {
    console.log('Me ejecuté después de 2s');
}, 2000)

// Si lo desean pueden definir el callback desde afuera
const dobleCallback = (item) => item * 2;
[1, 2, 3].map(dobleCallback);

const messageCallback = () => console.log('Me ejecuté después de 2s');
setTimeout(messageCallback, 2000);

// Ejemplo de la utilización de un callback
// función generica para operaciones matematicas.
function operate(callback) {
    const sum = (a, b) => a + b;
    const multiply = (a, b) => a * b;
    const substract = (a, b) => a - b;
    const div = (a, b) => a/b;
    return callback(sum, multiply,substract,div);
}

const sumResult = operate((sum, multiply) => {
    return sum(10, 5);
});

const multiplyResult = operate((sum, multiply, substract, div) => multiply(10, 5));
const substractResult = operate((sum, multiply, substract, div) => substract
(10, 5));
const divResult = operate((sum, multiply, substract, div) => div(10, 5));

console.log(sumResult);
console.log(multiplyResult);
console.log(substractResult);
console.log(divResult);
// arrow functions
// () => {}
// () => some Return value

// Ejercicio, a la funcion operate quiero que le agreguen
// las operaciones restantes, que son, division y resta.
// y un ejemplo de su utilización

// Los callbacks, aunque utiles
// pueden llevar a problemas si no se manejan adecuadamente:
// CALLBACK HELL: anidación excesiva de callbacks dentro de callbacks,
// lo que resulta en código que es dificil de leer y mantener.

operationOne(function(error, resultOne) {
    if(error) {
        // manejo de errores
    } else {
        operationTwo(resultOne, function(error, resultTwo) {
            if(error) {
                // manejo de errores
            } else {
                operationThree(resultTwo, function(error, resultThree) {
                    if(error) {
                        // manejo de errores
                    } else {
                        // hacer algo con resultThree
                    }
                })
            }
        })
    }
});