function validar(contrasenia) {
    const patron = /^[A-Za-z0-9]{8,}$/;
    if (!patron.test(contrasenia)) return false;
    if (!/[A-Z]/.test(contrasenia)) return false;
    if (!/[a-z]/.test(contrasenia)) return false;
    if (!/\d/.test(contrasenia)) return false;
    return true;
}

console.log(validar("XD"));
console.log(validar("contrasenia"));
console.log(validar("password"));
console.log(validar("buenPW0002"));
console.log(validar("hola"));
console.log(validar("Hola2"));
console.log(validar("Hola1234"));
