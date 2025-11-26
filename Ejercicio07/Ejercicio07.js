const boton = document.getElementById("boton");
const contenedor = document.querySelector(".contenedor");

boton.addEventListener("click", async () => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(respuesta => respuesta.json())
        .then(datos => {
            const contenido = document.createElement("p");
            contenido.innerHTML = 
            `Nombre: ${datos.name} <br>
            Email: ${datos.email} <br>
            Ciudad: ${datos.address.city}`
            contenedor.appendChild(contenido);
        })
});
