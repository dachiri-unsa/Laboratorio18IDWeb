const boton = document.getElementById("boton");
const contenedor = document.querySelector(".contenedor");

boton.addEventListener("click", async() => {
    try {
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Cargando...";
        contenedor.appendChild(nuevoParrafo);

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");
        if (!respuesta.ok) {
            throw new Error("Error al obtener los datos del usuario.");
        }
        const datos = await respuesta.json();
        nuevoParrafo.innerHTML =
            `Nombre: ${datos.name} <br>
            Email: ${datos.email} <br>
            Ciudad: ${datos.address.city}`
    }
    catch (e) {
        console.log(e.message);
    }
});
