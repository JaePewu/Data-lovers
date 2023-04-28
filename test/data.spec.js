import { filtroPorRol, ordenarPorZa, ordenarPorAz, ordenarPoder} from '../src/data.js';


/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/


describe('filtroPorRol', () => {
  const baseDatos = [
    { name: 'Ashe', tags: ['Marksman', 'Support'] },
    { name: 'Garen', tags: ['Fighter', 'Tank'] },
    { name: 'Morgana', tags: ['Mage', 'Support'] },
    { name: 'Soraka', tags: ['Support', 'Mage'] },
  ];

  it('debería una funciön', () => {
    expect(typeof filtroPorRol).toBe('function');
  });

  it('debería filtrar campeones por rol.', () => {
    const filteredData = filtroPorRol(baseDatos, 'Support');
    expect(filteredData).toEqual([
      { name: 'Ashe', tags: ['Marksman', 'Support'] },
      { name: 'Morgana', tags: ['Mage', 'Support'] },
      { name: 'Soraka', tags: ['Support', 'Mage'] },
    ]);
  });

  it('debería devolver una matriz vacía si ningún campeón coincide con el rol', () => {
    const filteredData = filtroPorRol(baseDatos, 'Assassin');
    expect(filteredData).toEqual([]);
  });
});


describe('ordenarPorZa',() => {
  it('debería una funciön', () => {
    expect(typeof ordenarPorZa).toBe('function');
  });

  it('debería ordenar por nombre de Z - A.', () => {
    const baseDatos = [{ name: 'Ashe' }, { name: 'Garen' }, {name: 'Katarina'}, {name: "Zilean"}];
    const expected = [{name: 'Zilean'}, {name: 'Katarina'}, { name: 'Garen' }, {name: 'Ashe' }];
    expect(ordenarPorZa(baseDatos)).toEqual(expected);
  });
});


describe('ordenarPorAz',() => {
  it('debería una funciön', () => {
    expect(typeof ordenarPorAz).toBe('function');
  });

  it('debería ordenar por nombre de A - Z.', () => {
    const baseDatos = [{ name: 'Garen' }, {name: 'Katarina'}, { name: 'Ashe' }, {name: "Zilean"}]; 
    const expected = [{ name: 'Ashe' }, { name: 'Garen' }, {name: 'Katarina'}, {name: "Zilean"}];
    expect(ordenarPorAz(baseDatos)).toEqual(expected);
  });
});



describe('ordenarPoder', () => {
  const baseDatos = [
    {name: 'Zed', info: {attack: 9, defense: 2, magic: 1}},
    {name: 'Katarina', info: {attack: 10, defense: 3, magic: 2}},
    {name: 'Ahri', info: {attack: 3, defense: 4, magic: 10}},
  ];

  it('debería una funciön', () => {
    expect(typeof ordenarPoder).toBe('function');
  });
  
  it('debería ordenar los datos de orden descendente por potencia (poder).', () => {
    const poder = 'magic';
    const expected = [
      {name: 'Ahri', info: {attack: 3, defense: 4, magic: 10}},
      {name: 'Katarina', info: {attack: 10, defense: 3, magic: 2}},
      {name: 'Zed', info: {attack: 9, defense: 2, magic: 1}},
    ];
    expect(ordenarPoder(baseDatos, poder)).toEqual(expected);
  });
});


