import { } from './data.js';
import data from './data/lol/lol.js';

import { header, main, footer } from './content.js';
//importa el codigo de content.js y se ve en mi web como html


const encaezadoContainer = document.createElement(`header`);
encaezadoContainer.innerHTML = header;
document.body.appendChild(encaezadoContainer);

const footContainer = document.createElement(`footer`);
footContainer.innerHTML = footer;
document.body.appendChild(footContainer);
//console.log(data);



/*LLAMANDO A LA MAIN DE CAMPEONES */
const mainContainer = document.createElement(`main`);
mainContainer.innerHTML = main;
document.body.appendChild(mainContainer);


/* ******LLAMADO DE DATA CAMPEONES********* */
const root = document.querySelector('#root');
const campeones = Object.values(data.campeones); //transformo en matriz la data.


function desplegarCampeones(dataCampeones){
  dataCampeones.forEach(element => {
    const campeonElement = document.createElement('figure'); 
    const imagenCampeon = document.createElement('img'); 
    const nombre = document.createElement('button'); 
    //const rol = document.createElement('p') 

    imagenCampeon.src = element.img; 
    nombre.textContent = element.name; 
    //rol.textContent = campeonData.tags; 

    campeonElement.setAttribute("id", "figureCampeon"); 
    imagenCampeon.setAttribute("id", "imgCampeon"); 
    nombre.setAttribute("id", "btnNombre"); 
    //rol.setAttribute("id","rol"); 
  
    campeonElement.appendChild(imagenCampeon); 
    campeonElement.appendChild(nombre); 
    //campeonElement.appendChild(rol); 
    root.appendChild(campeonElement); 
  })
}
desplegarCampeones(campeones);









