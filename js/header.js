// Selecciona el elemento con la clase "styleHeader" en el DOM donde se insertará el contenido del encabezado
let div_header = document.querySelector(".styleHeader");

// Inserta contenido HTML dentro del div del encabezado
div_header.innerHTML = `
    <!-- Sección del encabezado principal con un enlace a GitHub y el nombre -->
    <div class="seccionHeader">
        <a href="https://github.com/JUSTINRR88">
            <!-- Imagen del logo de GitHub, que actúa como enlace al perfil de GitHub -->
            <img src="https://raw.githubusercontent.com/JUSTINRR88/Imagenes-del-Proyecto/main/github-512.webp" alt="GitHub Profile">
        </a>
        <!-- Título con el nombre completo -->
        <h1>Justin Carlos Bercian Muñoz</h1>
    </div>

    <!-- Sección secundaria del encabezado que contiene un menú de navegación -->
    <div class="seccionHeader1">
        <nav> <!-- Inicia la barra de navegación -->
            <ul class="menu"> <!-- Lista de elementos del menú -->
                <!-- Elemento del menú con enlace a la sección de proyectos -->
                <li><a class="btn1" href="#proyectos">Proyectos</a></li>
                <!-- Elemento del menú con enlace a la sección de habilidades -->
                <li><a href="#habilidades">Habilidades</a></li>
                <!-- Elemento del menú con enlace a la sección de logros -->
                <li><a href="#logros">Logros</a></li>
            </ul>
        </nav> <!-- Fin de la barra de navegación -->
    </div>
`;


