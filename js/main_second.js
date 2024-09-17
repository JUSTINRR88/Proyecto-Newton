import { dataProyectos } from "../data/dataProyectos.js";
import { dataTegnologias } from "../data/dataTegnologias.js";

let seconMain = document.querySelector(".styleMain");

seconMain.innerHTML = `
    <div class="proyectos"></div>
    <div class="logros"></div>

`


function cargarProyectos(){
    let div_proyectos = document.querySelector(".proyectos")
    dataProyectos.forEach(element => {
        let div = document.createElement("div")
        div.classList.add("styleProyecto")
        div.innerHTML = `
        <a href="${element.link}">
        <img src="${element.img}" alt="">
        </a>
            <h3>${element.nombre}</h3> 
            <a href="${element.btn}" class="btn">GitHub</a>
        `

        div_proyectos.appendChild(div)
    });
}

cargarProyectos()

function cargarTegnologias(){
    let div_tegnologias = document.querySelector(".logros");
    dataTegnologias.forEach(element => {
        let div = document.createElement("div")
        div.classList.add("styleTegnologias")

        div.innerHTML = ` 
            <h3>${element.nombre}</h3> 
            <img src="${element.img}" alt="">


        `
        div_tegnologias.appendChild(div)
       });
}
cargarTegnologias();
