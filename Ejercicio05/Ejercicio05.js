fetch("https://jsonplaceholder.typicode.com/users")
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log("Lista de Usuarios: ");
        datos.forEach(element => {
            console.log("-"+element.name);
        });
    })
    .catch(error => console.log(error.message))