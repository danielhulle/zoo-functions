const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const count = data.species.reduce((acc, { name, residents }) => {
    const objCount = acc;
    objCount[name] = residents.length;
    if (animal && animal.species && animal.sex) {
      objCount[name] = residents.filter(({ sex }) => sex === animal.sex).length;
    }
    return objCount;
  }, {});

  if (animal && animal.species) return count[animal.species];

  return count;
};

module.exports = countAnimals;
