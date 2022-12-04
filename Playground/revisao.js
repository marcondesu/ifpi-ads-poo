"use strict";
function arrayToString(numeros) {
    let resultado = '';
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i] + '-';
    }
    return resultado.slice(0, resultado.length - 1);
}
function arrayToString2(numeros) {
    let resultado = '';
    numeros.forEach(function (numero) {
        resultado = resultado + numero + '-';
    });
    return resultado.slice(0, resultado.length - 1);
}
function arrayToString3(numeros) {
    let resultado = '';
    numeros.forEach(numero => resultado += numero + '-');
    return resultado.slice(0, resultado.length - 1);
}
function exibir(...parametros) {
    for (let i = 0; i < parametros.length; i++) {
        console.log(parametros[i]);
    }
}
function exibir2(...parametros) {
    parametros.forEach(p => console.log(p));
}
let numeros = [1, 2, 3];
//console.log(arrayToString2(numeros));
exibir2();
exibir2('a');
exibir2('a', 'b');
exibir2('a', 'b', 'c');
//console.log(arrayToString([1,2,3]));*/
