function arrayToString(numeros: number[]): string {
    let resultado: string = '';
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado + numeros[i] + '-';
    }
    return resultado.slice(0, resultado.length-1);
}

function arrayToString2(numeros: number[]): string {
    let resultado: string = '';
    numeros.forEach(function (numero) {
        resultado = resultado + numero + '-';
    });
    
    return resultado.slice(0, resultado.length-1);
}

function arrayToString3(numeros: number[]): string {
    let resultado: string = '';
    numeros.forEach( numero => resultado +=  numero + '-');
    
    return resultado.slice(0, resultado.length-1);
}

function exibir(...parametros: string[]): void {
    for (let i = 0; i < parametros.length; i++) {
        console.log(parametros[i]);
    }
}


function exibir2(...parametros: string[]): void {
    parametros.forEach( p => console.log(p));
}

let numeros: number[] = [1, 2, 3];
//console.log(arrayToString2(numeros));
exibir2();
exibir2('a');
exibir2('a','b'); 
exibir2('a','b','c');

//console.log(arrayToString([1,2,3]));*/
