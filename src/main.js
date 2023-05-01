import { filtroPorRol, ordenarPorZa, ordenarPorAz, ordenarPoder, porcentajeRoles } from './data.js';
import data from './data/lol/lol.js';

import { header, main, footer } from './content.js';
//importa el codigo de content.js y se ve en mi web como html

/* ****** CONSTANTES ********* */
const encabezadoContainer = document.createElement(`header`);
const footContainer = document.createElement(`footer`);
const mainContainer = document.createElement(`main`);
const footContainer2 = footContainer.cloneNode(true);/* código crea una copia exacta*/



encabezadoContainer.innerHTML = header;
document.body.appendChild(encabezadoContainer);

footContainer.innerHTML = footer;
document.body.appendChild(footContainer);

mainContainer.innerHTML = main;
document.body.appendChild(mainContainer);


footContainer2.classList.add('footerCampeon');
document.body.appendChild(footContainer2);




/* ****** CONSTANTES PARA SECCION DE MAIN CAMPEONES ********* */
const root = document.querySelector('#root');
const campeones = Object.values(data.campeones); //transformo en matriz la data.
let dataFiltrada = campeones;
const totalCampeones = campeones.length;//para saber el total de campeones
const ordenarPorSelect = document.getElementById("ordenarPor");//llamando por el elemento id
const mensajePorcentaje = document.getElementById("parrafoPorcentaje"); //llamado para modificar el parrafo



/************************     MUESTRA LA DATA DE CAMPEONES     ******************************/
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
}

/*************        ORDENAR POR SELECT       *****************/
function laOrdenadora(){
  const value = ordenarPorSelect.value;
  /*let selectPoder = campeones.info;*/
  if (value === "z-a"){
    dataFiltrada = ordenarPorZa(dataFiltrada);
  }else if(value === "a-z"){
    dataFiltrada = ordenarPorAz(dataFiltrada);
  }else if(value === "ataque"){
    const poder = "attack"
    dataFiltrada = ordenarPoder(dataFiltrada,poder);
  }else if(value === "magia"){
    const  poder = "magic"
    dataFiltrada = ordenarPoder(dataFiltrada, poder);
  }else if(value === "defensa"){
    const poder = "defense"
    dataFiltrada = ordenarPoder(dataFiltrada, poder);
  }else{
    dataFiltrada = ordenarPorAz(dataFiltrada);
  }
}

/****************    ESCUCHA  DE  ORDENAR POR SELECT    ******************/
ordenarPorSelect.addEventListener("change", () => {
  root.innerHTML = "";
  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

desplegarCampeones(campeones);



/* ***************     FILTROS    POR    ROL            *************** */
document.querySelector("#todos").addEventListener("click", () => {
  root.innerHTML = "";
  dataFiltrada = campeones;
  
  const mensajePorcentaje = document.getElementById("parrafoPorcentaje"); 
  mensajePorcentaje.textContent = "";

  laOrdenadora();
  desplegarCampeones(dataFiltrada);
});

const actualizarCampeonesPorRol = (tagSelect,tagEspanol) => {//TAGESPANOL, variable creada para que elija el 2do parametro en español y mostrarla
  root.innerHTML ="";
  dataFiltrada = filtroPorRol(campeones,tagSelect);
  const totalRol = dataFiltrada.length;
  const porcentajeDeRol = porcentajeRoles(totalCampeones, totalRol);

  mensajePorcentaje.textContent = "La cantidad de campeones que tienen el rol de "+ tagEspanol + " es del " + porcentajeDeRol + "%.";

  laOrdenadora();
  desplegarCampeones(dataFiltrada);
}

document.querySelector("#asesinos").addEventListener("click", () => {
  actualizarCampeonesPorRol("Assassin","Asesino");
});

document.querySelector("#luchadores").addEventListener("click", () => {
  actualizarCampeonesPorRol("Fighter", "Luchador");
});

document.querySelector("#magos").addEventListener("click", () => {
  actualizarCampeonesPorRol("Mage", "Mago");
});

document.querySelector("#tiradores").addEventListener("click", () => {
  actualizarCampeonesPorRol("Marksman", "Tirador");
});

document.querySelector("#apoyo").addEventListener("click", () => {
  actualizarCampeonesPorRol("Support", "Apoyo");
});

document.querySelector("#tanque").addEventListener("click", () => {
  actualizarCampeonesPorRol("Tank", "Tanque");
});/*FIN filtrado por rol */


/******  ******/
//const todos = document.querySelector("#todos");
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





/*const selectRoles = document.getElementById("#role")
selectRoles.addEventListener("change", () => {
  
})*/












