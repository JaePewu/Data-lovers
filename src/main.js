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


/*LLAMADO DE DATA*/
const root = document.querySelector('#root');
const campeon = data.campeon;//Permite que el código se enfoque solo en los datos de los campeones y evite cualquier otra propiedad en el objeto "data"

for (const champion in campeon) {//recorre todas las propiedades del v objeto llamado "campeon" y para cada propiedad en el objeto, cra lo que necesite
  const campeonData = campeon[champion];
  const campeonElement = document.createElement('figure');
  const imagenCampeon = document.createElement('img');
  const nombre = document.createElement('button');
  //const rol = document.createElement('p')

  imagenCampeon.src = campeonData.img;
  nombre.textContent = campeonData.name;
  //rol.textContent = campeonData.tags;

  campeonElement.setAttribute("id", "figureCampeon");
  imagenCampeon.setAttribute("id", "imgCampeon");
  nombre.setAttribute("id", "btnNombre");
  //rol.setAttribute("id","rol");


  campeonElement.appendChild(imagenCampeon);
  campeonElement.appendChild(nombre);
  //campeonElement.appendChild(rol);
  root.appendChild(campeonElement);
}
