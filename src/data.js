// *** FUNCION PARA FILTRAR POR ROL ******//
export const filtroPorRol = (baseDatos, rol) => {
  const dataFiltrada = baseDatos.filter(campeon => campeon.tags.includes(rol));// filtrar elementos de una matriz (array) en función de un criterio específico y crear una nueva matriz
  return dataFiltrada;
};//*FIN DE FILTRO*//


// **** FUNCION PARA ORDENAR DE A -Z Y DE Z -A ***** //
export const ordenarPorZa = (baseDatos) =>{
  const campeonesZA = baseDatos.sort((a, z) => z.name.localeCompare(a.name));
  return campeonesZA;
};

export const ordenarPorAz = (baseDatos) => {
  const campeonesAZ = baseDatos.sort ((a, z) => a.name.localeCompare(z.name));//ordena los elementos de una matriz en su lugar, lo que significa que modifica la matriz original y no crea una nueva matriz ordenada.
  return campeonesAZ;/*Localcompare compara dos cadenas de texto */
};

/*const anotherExample = () => {
  const assassinssorted = assassins.sort((a,z) => (a.name < z.name ? 1 : -1)); 
  return 'OMG';
};*/

//**** FUNCION ORDENAR POR *******/
export const ordenarPoder = (baseDatos,poder) => {
  const campeonesPoder = baseDatos.sort((poderA, poderB) => poderB.info[poder] - poderA.info[poder]);
  return campeonesPoder;
};


//******* FUNCION PARA SACAR PORCENTAJE *********/
/*export const porcentajeRoles = (dataCampeones, dataRol) => {
  const rolTotal = (dataRol / dataCampeones) * 100;
  return rolTotal;
};*/