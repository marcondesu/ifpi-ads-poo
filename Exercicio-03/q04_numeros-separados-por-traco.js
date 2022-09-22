var array_numeros = [1, 2, 3, 4, 5];
var array_formatado = "";
array_numeros.forEach(function (item, index) {
    if (index !== array_numeros.length - 1) {
        array_formatado += item + "-";
    }
    else {
        array_formatado += item;
    }
});
console.log(array_formatado);
