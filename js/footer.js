// Importa los datos necesarios desde otros archivos
import { lista_stacks } from "../data/dataHabilidades.js"; // Importa la lista de stacks (habilidades técnicas) desde un archivo externo
import { perfilData } from "../data/dataPerfil.js"; // Importa los datos del perfil desde un archivo externo

// Selecciona el elemento del pie de página donde se agregarán las secciones
let div_footer = document.querySelector(".styleFooter");

// Inserta dos divs dentro del pie de página, uno para la primera sección (datos personales) y otro para la segunda sección (habilidades)
div_footer.innerHTML = `
    <div class="seccion1"></div>  <!-- Sección para los datos personales -->
    <div class="seccion2"></div>  <!-- Sección para las habilidades técnicas -->
`;
let div_seccion2 = document.querySelector(".seccion2");
div_seccion2.innerHTML = `
<div class="info-personal">
<h2>Información Personal</h2>
<p><strong>Nombre:</strong> Justin Carlos Bercian Muñoz</p>
<p><strong>Fecha de nacimiento:</strong> 2 de Abril del 2007</p>
<p><strong>Nacionalidad:</strong> Guatemalteco</p>
<p><strong>Edad:</strong> 17 años</p>
<p><strong>Género:</strong> Masculino</p>
<p><strong>Carrera Diversificado:</strong> Bachillerato en Ciencias y Letras con Orientación en Computación</p>
</div>
`

// Selecciona el div de la primera sección (sección de datos personales)
let div_seccion1 = document.querySelector(".seccion1");

// Función para agregar los datos personales al DOM
function perfil() {
    // Itera sobre los datos del perfil y crea un div con la información de contacto para cada entrada
    perfilData.forEach(element => {
        let div = document.createElement("div");  // Crea un nuevo div para cada entrada de datos personales
        div.classList.add("descripcionContacto"); // Añade la clase CSS para aplicar estilos al div

        // Agrega el contenido HTML dentro del div con la información del perfil (imagen, nombre, contacto, correo)
        div.innerHTML = `
        <img src="${element.img}" alt="">  <!-- Imagen del contacto -->
        <div class="nombre">Contacto</div>  <!-- Texto "Contacto" -->
        <div class="nombre">Nombre: ${element.nombre}</div>  <!-- Nombre del contacto -->
        <div class="contacto">Numero: ${element.contacto}</div>  <!-- Número de contacto -->
        <div class="correo">Correo: ${element.correo}</div>  <!-- Correo electrónico -->
        `;

        // Añade el div creado a la primera sección del pie de página
        div_seccion1.appendChild(div);
    });
}

// Llama a la función para cargar los datos del perfil en la primera sección del pie de página
perfil();


// Función para agregar las habilidades técnicas al DOM
export function cargar_stacks() {
    // Selecciona el contenedor principal (seconMain) para mostrar las habilidades
    let div_stacks = document.querySelector(".styleMain"); 
    
    // Limpia el contenido actual del contenedor
    div_stacks.innerHTML = `
        <div class="habilidades"></div>     <!-- Contenedor de las habilidades -->
    `;

    // Selecciona el contenedor recién creado para las habilidades
    let contenedor_habilidades = div_stacks.querySelector(".habilidades");

    // Itera sobre la lista de stacks (habilidades) y crea un div con una imagen representativa para cada habilidad
    lista_stacks.forEach(element => {
        let div = document.createElement("div");  // Crea un nuevo div para cada stack (habilidad)
        div.className = element.className;  // Asigna una clase CSS específica a cada div, tomada de los datos de cada stack

        // Agrega el contenido HTML dentro del div con la imagen de la habilidad
        div.innerHTML = `
            <img src="${element.src}" alt="${element.nombre}">  <!-- Imagen de la habilidad técnica -->
        `;

        // Añade el div creado al contenedor de habilidades
        contenedor_habilidades.appendChild(div);
    });
}

