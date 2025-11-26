const nombresUsuarios = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la respuesta.");
        }
        const datos = await respuesta.json();
        datos.forEach(element => {
            console.log("-"+element.name);
        });

    }
    catch (error) {
        console.log(error.message);
    }
}
nombresUsuarios();
