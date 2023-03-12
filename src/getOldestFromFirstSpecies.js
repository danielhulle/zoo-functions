const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getSpeciesId = data.employees
    .filter(({ id: employeeId }) => employeeId === id)
    .map(({ responsibleFor }) => responsibleFor[0]);

  const getSpeciesInfo = data.species.find(({ id: animalId }) => getSpeciesId.includes(animalId));
  const getAnimalsAge = getSpeciesInfo.residents.map(({ age }) => age).sort((a, b) => b - a);
  const getOldestAnimal = getSpeciesInfo.residents.filter(({ age }) => getAnimalsAge[0] === age);

  const oldestAnimalInfo = getOldestAnimal.reduce((acc, curr) => {
    let values = acc;
    values = Object.values(curr);
    return values;
  }, []);

  return oldestAnimalInfo;
};

module.exports = getOldestFromFirstSpecies;
