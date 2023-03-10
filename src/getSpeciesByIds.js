const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const foundSpecies = data.species.filter(({ id }) => ids.includes(id));

  return foundSpecies;
};

module.exports = getSpeciesByIds;
