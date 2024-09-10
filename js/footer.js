import { perfilData } from "../data/dataPerfil.js";
let div_footer = document.querySelector(".styleFooter")

div_footer.innerHTML = `

    <div class="seccion1"></div>
    <div class="seccion2"></div>
`;

let div_seccion1 = document.querySelector(".seccion1")

function perfil(){
    perfilData.forEach(element => {
        let div = document.createElement("div");         
        div.innerHTML = `
        <img src="${element.img}" alt="">
        <div class="nombre">${element.nombre}</div>
        <div class="contacto">${element.contacto}</div>
        <div class="correo">${element.correo}</div>
        `
        div_seccion1.appendChild(div);

    });
}

perfil()


