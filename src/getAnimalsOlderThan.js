const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalFind = data.species.find((animalName) => animalName.name === animal);

  const verifyAge = animalFind.residents.every((residents) => residents.age > age);

  return verifyAge;
};

module.exports = getAnimalsOlderThan;
