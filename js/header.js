// Llama a la función para cargar las tecnologías (logros) en la página si es necesario
// cargarTegnologias();
import { cargar_stacks } from "./footer.js";
import { cargarProyectos, cargarTegnologias } from "./main_second.js";

// Funcionalidad del header
let div_header = document.querySelector(".styleHeader");
div_header.innerHTML = `
    <div class="seccionHeader">
        <a href="https://github.com/JUSTINRR88">
            <img src="https://raw.githubusercontent.com/JUSTINRR88/Imagenes-del-Proyecto/main/github-512.webp" alt="GitHub Profile">
        </a>
        <h1>Justin Carlos Bercian Muñoz</h1>
    </div>
    <div class="seccionHeader1">
        <nav>
            <ul class="menu">
                <li><a class="btn1" href="#proyectos">Proyectos</a></li>
                <li><a class="btn2" href="#habilidades">Habilidades</a></li>
                <li><a class="btn3" href="#logros">Logros</a></li>
            </ul>
        </nav>
    </div>
`;

// Agrega funcionalidad al botón para mostrar solo los proyectos
let header_boton = document.querySelector(".btn1");
function mostrarProyectos() {
    cargarProyectos();
}

// Agrega el evento de clic al botón
header_boton.addEventListener("click", mostrarProyectos);

// Función que se ejecuta al hacer clic en el botón de Habilidades
function mostrarHabilidades() {
    cargar_stacks(); // Llama a la función cargar_stacks para mostrar las habilidades en seconMain
}

// Asocia el evento click del botón .btn2 a la función mostrarHabilidades
let header_boton2 = document.querySelector(".btn2");
header_boton2.addEventListener("click", mostrarHabilidades);



let header_boton3 = document.querySelector(".btn3");
function mostrarLogros() {
    cargarTegnologias();

}

// Agrega el evento de clic al botón
header_boton3.addEventListener("click", mostrarLogros);
