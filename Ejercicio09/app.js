import { suma,resta } from "./sumaResta.js";
import multiplicacion, {division} from "./multiplicacionDivision.js";

const formulario = document.getElementById("formulario");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const respuestas = document.querySelector(".respuestas");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    respuestas.innerHTML = 
    `Suma: ${suma(n1,n2)} <br>
    Resta: ${resta(n1,n2)} <br>
    Multiplicacion: ${multiplicacion(n1,n2)}`;
    try {
        let cociente = division(n1,n2);
        respuestas.innerHTML += "<br> Divicion: "+cociente.toFixed(2);
    }
    catch (error) {
        respuestas.innerHTML += "<br> No se puede dividir entre cero."
        alert(error.message);
    }
});
