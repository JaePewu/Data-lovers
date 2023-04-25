// *** FUNCION PARA FILTRAR POR ROL ******//
export const filtroPorRol = (baseDatos, rol) => {
  const dataFiltrada = baseDatos.filter(campeon => campeon.tags.includes(rol));
  return dataFiltrada;
};


// **** FUNCION PARA ORDENAR DE A -Z Y DE Z -A ***** //
export const ordenarPorZa = (baseDatos) =>{
  const campeonesZA = baseDatos.sort((a, z) => z.name.localeCompare(a.name));
  return campeonesZA;
};

export const ordenarPorAz = (baseDatos) => {
  const campeonesAZ = baseDatos.sort ((a, z) => a.name.localeCompare(z.name));
  return campeonesAZ;
};

/*const anotherExample = () => {
  const assassinssorted = assassins.sort((a,z) => (a.name < z.name ? 1 : -1)); 
  return 'OMG';
};*/