const data = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  const findAnimal = data.species.filter(({ name }) => scheduleTarget.includes(name));
  const animalSchedule = findAnimal.reduce((acc, curr) => {
    let arr = acc;
    arr = curr.availability;
    return arr;
  }, {});

  return animalSchedule;
};

console.log(getSchedule('lions'));

module.exports = getSchedule;
