// Importa los datos de proyectos y tecnologías desde archivos externos
import { dataProyectos } from "../data/dataProyectos.js"; // Importa la lista de proyectos
import { dataTegnologias } from "../data/dataTegnologias.js"; // Importa la lista de tecnologías

// Selecciona el elemento principal (main) donde se mostrarán los proyectos y logros/tecnologías
let seconMain = document.querySelector(".styleMain");

// Inserta dentro del div principal (main) dos divs: uno para proyectos y otro para logros (tecnologías)
seconMain.innerHTML = `
    <div class="proyectos"></div>  <!-- Sección para los proyectos -->
    <div class="logros"></div>     <!-- Sección para las tecnologías o logros -->
`;

// Función para cargar y mostrar los proyectos en el DOM
function cargarProyectos() {
    // Selecciona el div donde se van a insertar los proyectos
    let div_proyectos = document.querySelector(".proyectos");

    // Itera sobre la lista de proyectos y crea un div con la información de cada proyecto
    dataProyectos.forEach(element => {
        let div = document.createElement("div");  // Crea un nuevo div para cada proyecto
        div.classList.add("styleProyecto");  // Añade una clase CSS para estilizar cada proyecto

        // Inserta el contenido HTML en el div, incluyendo un enlace con una imagen del proyecto y un botón hacia GitHub
        div.innerHTML = `
        <a href="${element.link}"> <!-- Enlace al proyecto -->
            <img src="${element.img}" alt=""> <!-- Imagen del proyecto -->
        </a>
        <h3>${element.nombre}</h3>  <!-- Nombre del proyecto -->
        <a href="${element.btn}" class="btn">GitHub</a> <!-- Botón con enlace al repositorio de GitHub -->
        `;

        // Añade el div creado al contenedor de proyectos
        div_proyectos.appendChild(div);
    });
}

// Llama a la función para cargar los proyectos en la página
cargarProyectos();

// Función para cargar y mostrar las tecnologías (logros) en el DOM
function cargarTegnologias() {
    // Selecciona el div donde se van a insertar las tecnologías (logros)
    let div_tegnologias = document.querySelector(".logros");

    // Itera sobre la lista de tecnologías y crea un div para cada una
    dataTegnologias.forEach(element => {
        let div = document.createElement("div");  // Crea un nuevo div para cada tecnología
        div.classList.add("styleTegnologias");  // Añade una clase CSS para estilizar cada tecnología

        // Inserta el contenido HTML en el div, incluyendo el nombre y la imagen de la tecnología
        div.innerHTML = `
            <h3>${element.nombre}</h3> <!-- Nombre de la tecnología -->
            <img src="${element.img}" alt=""> <!-- Imagen de la tecnología -->
        `;

        // Añade el div creado al contenedor de tecnologías (logros)
        div_tegnologias.appendChild(div);
    });
}

// Llama a la función para cargar las tecnologías (logros) en la página
cargarTegnologias();
