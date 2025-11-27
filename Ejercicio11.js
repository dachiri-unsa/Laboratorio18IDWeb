function validar(direccion) {
    const patron = /^https:\/\//
    if (!patron.test(direccion)) return false;
    return true;
}
console.log(validar("https://direccionAleatoria"));
console.log(validar("http://direccionInsegura"));
console.log(validar("http://virus"));
console.log(validar("https://buenaDireccion"));
