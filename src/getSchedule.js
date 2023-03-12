const data = require('../data/zoo_data');

const getAllSchedules = (param) => {
  const newObj = {};
  Object.keys(data.hours).forEach((day) => {
    if (day !== 'Monday') {
      newObj[day] = {
        officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
        exhibition: data.species
          .filter(({ name, availability }) => availability.includes(day))
          .map(({ name }) => name),
      };
    }
    if (day === 'Monday') {
      newObj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return newObj;
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget) {
    const findAnimal = data.species.filter(({ name }) => scheduleTarget.includes(name));
    const animalSchedule = findAnimal.reduce((acc, curr) => {
      let arr = acc;
      arr = curr.availability;
      return arr;
    }, {});
    return animalSchedule;
  }
  return getAllSchedules();
};

module.exports = getSchedule;
