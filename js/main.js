// Selecciona el primer elemento en el DOM que tenga la clase "root"
let div_root = document.querySelector(".root");

// Modifica el contenido HTML del elemento seleccionado
div_root.innerHTML = `
    <!-- Crea un elemento de encabezado <header> con la clase "styleHeader" -->
    <header class="styleHeader"></header>
    
    <!-- Crea un elemento de pie de página <footer> con la clase "styleFooter" -->
    <footer class="styleFooter"></footer>
    
    <!-- Crea un elemento principal <main> con la clase "styleMain" para el contenido -->
    <main class="styleMain"></main>
`;
