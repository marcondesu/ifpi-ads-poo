var exibirElementos = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i]);
    }
    console.log(); // quebra de linha
};
exibirElementos("a", "b");
exibirElementos("a", "b", "c");
exibirElementos("a", "b", "c", "d");
