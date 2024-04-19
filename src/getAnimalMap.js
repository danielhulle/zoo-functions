const data = require('../data/zoo_data');

const getSpeciesByLocation = () => {
  const { species } = data;

  const animals = species.reduce((acc, animal) => {
    const { name, location } = animal;

    if (!acc[location]) {
      acc[location] = [];
    }

    acc[location].push(name);

    return acc;
  }, {});

  return animals;
};

const getAnimalMap = (options) => getSpeciesByLocation();

module.exports = getAnimalMap;
