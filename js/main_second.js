// Importa los datos de proyectos y tecnologías desde archivos externos
import { dataProyectos } from "../data/dataProyectos.js"; // Importa la lista de proyectos
import { dataTegnologias } from "../data/dataTegnologias.js"; // Importa la lista de tecnologías

// Selecciona el elemento principal (main) donde se mostrarán los proyectos y logros/tecnologías
let seconMain = document.querySelector(".styleMain");
seconMain.innerHTML = `
   
`;
// Inserta dentro del div principal (main) dos divs: uno para proyectos y otro para logros (tecnologías)
seconMain.innerHTML = `
<div class="info-hobbies">
<h2>Justin Bercian</h2>
<h3>Hobbies e Intereses</h3>
<div class="hobbies">
    <ul>
        <li><strong>Entrenamiento de Baloncesto:</strong> Me apasiona entrenar baloncesto y lo practico regularmente para mejorar mis habilidades físicas y de equipo.</li>
        <li><strong>Curso de Preparación de Matemáticas:</strong> Actualmente estoy cursando un programa de preparación de matemáticas para reforzar mis conocimientos de cara a los estudios universitarios.</li>
        <li><strong>Aprender nuevas tecnologías:</strong> Me apasiona la tecnología y siempre busco aprender sobre nuevas herramientas y lenguajes de programación para expandir mis conocimientos.</li>
        <li><strong>Vida espiritual:</strong>Como evangélico, valoro la espiritualidad y la comunidad, lo que me ayuda a mantener un enfoque equilibrado en la vida.</li>
        <li><strong>Voluntariado:</strong> Me involucro en actividades de voluntariado, contribuyendo a causas sociales y de comunidad.</li>
    </ul>
</div>
</div>
    <div class="proyectos"></div>  <!-- Sección para los proyectos -->
    <div class="habilidades"></div>     <!-- Sección para las tecnologías o logros -->
    <div class="logros"></div>     <!-- Sección para las tecnologías o logros -->
`;

// Función para cargar y mostrar los proyectos en el DOM
export function cargarProyectos() {
    // Limpia el contenido actual de seconMain y deja solo el contenedor de proyectos
    seconMain.innerHTML = `
        <div class="proyectos"></div>
    `;

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
        <h4>${element.fecha}</h4>  <!-- Nombre del proyecto -->

        <p>${element.descripccion}</p>  <!-- Descripción del proyecto -->
        <p>${element.funcionamiento}</p>  <!-- Funcionamiento del proyecto -->
        <a href="${element.btn}" class="btn">GitHub</a> <!-- Botón con enlace al repositorio de GitHub -->
        `;

        // Añade el div creado al contenedor de proyectos
        div_proyectos.appendChild(div);
    });
}


// Llama a la función para cargar los proyectos en la página de forma inicial si es necesario
// cargarProyectos();

export function cargarTegnologias() {
    // Limpia el contenido actual de seconMain y deja solo el contenedor de tecnologías
    seconMain.innerHTML = `
        <div class="logros"></div>
    `;

    // Selecciona el div donde se van a insertar las tecnologías (logros)
    let div_tegnologias = document.querySelector(".logros");

    // Itera sobre la lista de tecnologías y crea un div para cada una con la información adicional
    dataTegnologias.forEach(element => {
        let div = document.createElement("div");  // Crea un nuevo div para cada tecnología
        div.classList.add("styleTegnologias");  // Añade una clase CSS para estilizar cada tecnología

        // Inserta el contenido HTML en el div, incluyendo el nombre, la imagen y la descripción
        div.innerHTML = `
            <h3>${element.nombre}</h3> <!-- Nombre de la tecnología -->
            <a href="${element.link}"><img src="${element.img}" alt=""> <!-- Imagendel certificado o diploma --> </a>
            <p>${element.descripcion}</p> <!-- Descripción del logro -->
        `;

        // Añade el div creado al contenedor de tecnologías (logros)
        div_tegnologias.appendChild(div);
    });
}

