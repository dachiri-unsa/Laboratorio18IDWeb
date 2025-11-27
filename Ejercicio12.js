const quitarEtiquetas = (expresion) => {
    const patronEtiquetas = /<[^>]+>/g;
    return expresion.replace(patronEtiquetas,"");
}
console.log(quitarEtiquetas('<a>link</a>'));
console.log(quitarEtiquetas('<div class="ejemplo">Hola</div>'));
console.log(quitarEtiquetas("<main><article>Articulo1</article></main>"));
console.log(quitarEtiquetas("<p>Primero</p><p>Segundo</p>"));
