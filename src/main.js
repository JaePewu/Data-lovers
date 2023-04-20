import { } from './data.js';
import data from './data/lol/lol.js';

import { header,/*footer*/ } from './content.js';
//importa el codigo de content.js y se ve en mi web como html
const mainContainer = document.createElement(`div`);
mainContainer.innerHTML = header;
document.body.appendChild(mainContainer);

/*const footContainer = document.createElement(`footer`);
footContainer.innerHTML = footer;
document.body.appendChild(footContainer);*/
//console.log(data);

/*LLAMADO DE DATA*/
const root = document.querySelector('#root');
console.log(data.campeon);

/*data.campeon.forEach(element => {
  const campeones = document.createElement('div');
  const imagen = document.createElement('img');
  const nombre = document.createElement('p');

  imagen.src = element.image;
  nombre.textContent = element.name;
  campeones.appendChild(imagen);
  campeones.appendChild(nombre);
  root.appendChild(campeones);
});*/

const campeon = data.campeon;

for (const champion in campeon) {
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
