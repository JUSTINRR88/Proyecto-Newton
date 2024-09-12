import { perfilData } from "../data/dataPerfil.js";
let div_footer = document.querySelector(".styleFooter")

div_footer.innerHTML = `

    <div class="seccion1"></div>
    <div class="seccion2"></div>
`;

let div_seccion1 = document.querySelector(".seccion1")
//funcion para agregar mis datos personales 
function perfil(){
    perfilData.forEach(element => {
        let div = document.createElement("div");     
        div.classList.add("descripcionContacto")    
        div.innerHTML = `
        <img src="${element.img}" alt="">
        <div class="nombre">Contacto</div>
        <div class="nombre">Nombre: ${element.nombre}</div>
        <div class="contacto">Numero: ${element.contacto}</div>
        <div class="correo">Correo: ${element.correo}</div>
        `
        div_seccion1.appendChild(div);

    });
}
perfil()


