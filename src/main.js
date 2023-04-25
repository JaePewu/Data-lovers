import { filtroPorRol, ordenarPorZa, ordenarPorAz } from './data.js';
import data from './data/lol/lol.js';

import { header, main, footer } from './content.js';
//importa el codigo de content.js y se ve en mi web como html


const encaezadoContainer = document.createElement(`header`);
encaezadoContainer.innerHTML = header;
document.body.appendChild(encaezadoContainer);

const footContainer = document.createElement(`footer`);
footContainer.innerHTML = footer;
document.body.appendChild(footContainer);


/* *****LLAMANDO A LA MAIN DE CAMPEONES******* */
const mainContainer = document.createElement(`main`);
mainContainer.innerHTML = main;
document.body.appendChild(mainContainer);


/* ******LLAMADO DE DATA CAMPEONES********* */
const root = document.querySelector('#root');
const campeones = Object.values(data.campeones); //transformo en matriz la data.


function desplegarCampeones(dataCampeones){
  dataCampeones.forEach(element => {
    const campeonFigure = document.createElement('figure'); 
    const imagenCampeon = document.createElement('img'); 
    const nombreBoton = document.createElement('button'); 
    
    
    imagenCampeon.src = element.img; 
    nombreBoton.textContent = element.name;
    

    campeonFigure.setAttribute("id", "figureCampeon"); 
    imagenCampeon.setAttribute("id", "imgCampeon"); 
    nombreBoton.setAttribute("id", "btnNombre"); 

    campeonFigure.appendChild(imagenCampeon); 
    campeonFigure.appendChild(nombreBoton); 
    
    root.appendChild(campeonFigure); 
  })
}
desplegarCampeones(campeones);


/* **** FILTROS POR ROL***** */
let dataFiltrada = campeones;

document.querySelector("#todos").addEventListener("click", () => {
  root.innerHTML = "";
  dataFiltrada = campeones;
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

document.querySelector("#asesinos").addEventListener("click", () => {
  root.innerHTML = "";
  const tagSelect = "Assassin";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
  
});

document.querySelector("#luchadores").addEventListener("click", () => {
  root.innerHTML = "";
  const tagSelect = "Fighter";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

document.querySelector("#magos").addEventListener("click", () => {
  root.innerHTML = "";
  const tagSelect = "Mage";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

document.querySelector("#tiradores").addEventListener("click", () => {
  root.innerHTML = "";
  const tagSelect = "Marksman";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

document.querySelector("#apoyo").addEventListener("click", () => {
  root.innerHTML = "";
  const tagSelect = "Support";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

document.querySelector("#tanque").addEventListener("click", () => {
  root.innerHTML = "";
  const tagSelect = "Tank";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});/*FIN filtrado por rol */


const ordenarPorSelect = document.getElementById("ordenarPor");





ordenarPorSelect.addEventListener("change", laOrdenadora);

function laOrdenadora(){
  const value = ordenarPorSelect.value;

  if (value === "z-a"){
    root.innerHTML = "";
    dataFiltrada = ordenarPorZa(dataFiltrada);
    desplegarCampeones(dataFiltrada);
  }else if(value === "a-z"){
    root.innerHTML = "";
    dataFiltrada = ordenarPorAz(dataFiltrada);
    desplegarCampeones(dataFiltrada);
  }else{
    root.innerHTML = "";
    dataFiltrada = ordenarPorAz(dataFiltrada);
    desplegarCampeones(dataFiltrada);
}

}












