const dividirTexto = (expresion) => {
    const patronPalabras = /[A-Za-záéíóú Ññ]+/g;
    return expresion.match(patronPalabras);
}
console.log(dividirTexto("Hola. Cómo estás? Bien!"));
console.log(dividirTexto("Adios. Cuando nos vemos?"));
console.log(dividirTexto("Bien!___ Pepito Come Piña"));
