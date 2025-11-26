const cargarUsuario = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const datosUsuario = await respuesta.json();
            console.log("Name: "+datosUsuario.name);
            console.log("Username: "+datosUsuario.username);
            console.log("Email: "+datosUsuario.email);
    }
    catch (error) {
        console.log(error.message);
    }
}
cargarUsuario();
