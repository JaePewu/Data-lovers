import { filtroPorRol, ordenarPorZa, ordenarPorAz, ordenarPoder, /*porcentajeRoles*/ } from './data.js';
import data from './data/lol/lol.js';

import { header, main, footer } from './content.js';
//importa el codigo de content.js y se ve en mi web como html


const encaezadoContainer = document.createElement(`header`);
const footContainer = document.createElement(`footer`);
const mainContainer = document.createElement(`main`);

encaezadoContainer.innerHTML = header;
document.body.appendChild(encaezadoContainer);

footContainer.innerHTML = footer;
document.body.appendChild(footContainer);

/* *****LLAMANDO A LA MAIN DE CAMPEONES******* */
mainContainer.innerHTML = main;
document.body.appendChild(mainContainer);

const footContainer2 = footContainer.cloneNode(true);/* código crea una copia exacta*/
footContainer2.classList.add('footerCampeon');
document.body.appendChild(footContainer2);




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
  });
};
desplegarCampeones(campeones);


/******  ******/
const todos = document.querySelector("#todos");
/*const roleCheckboxes = document.querySelectorAll("#roles .role");

todos.addEventListener("change", function() {
  if (this.checked) {
    roleCheckboxes.forEach(function(checkbox) {
      checkbox.style.display = "block";
    });
  } else {
    roleCheckboxes.forEach(function(checkbox) {
      checkbox.style.display = "none";
    });
  }
});*/

/* **** FILTROS POR ROL***** */
let dataFiltrada = campeones;

/*const totalCampeones = campeones.length;
console.log(totalCampeones);*/

todos.addEventListener("click", () => {
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
//const campeonInfo = dataFiltrada.flatMap(campeon => campeon.info)

ordenarPorSelect.addEventListener("change", () => {
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

function laOrdenadora(){
  const value = ordenarPorSelect.value;
  /*let selectPoder = campeones.info;*/

  if (value === "z-a"){
    root.innerHTML = "";
    dataFiltrada = ordenarPorZa(dataFiltrada);
    
  }else if(value === "a-z"){
    root.innerHTML = "";
    dataFiltrada = ordenarPorAz(dataFiltrada);
   
  }else if(value === "ataque"){
    root.innerHTML = "";
    const poder = "attack"
    dataFiltrada = ordenarPoder(dataFiltrada,poder);
    
  }else if(value === "magia"){
    root.innerHTML = "";
    const  poder = "magic"
    dataFiltrada = ordenarPoder(dataFiltrada, poder);

  }else if(value === "defensa"){
    root.innerHTML = "";
    const poder = "defense"
    dataFiltrada = ordenarPoder(dataFiltrada, poder);

  }else{
    root.innerHTML = "";
    dataFiltrada = ordenarPorAz(dataFiltrada);
  }
}

/*const selectRoles = document.getElementById("#role")
selectRoles.addEventListener("change", () => {
  
})*/












