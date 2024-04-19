const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const openDays = days.slice(0, 6);

const getAnimals = (day) => {
  const { species } = data;
  const animals = species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);

  return animals;
};

const getAnimalSchedule = (scheduleTarget) => {
  const { species } = data;
  return species.find((animal) => scheduleTarget.includes(animal.name))
    .availability;
};

const isMonday = () => ({
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
});

const getDailySchedule = (day) => {
  const { hours } = data;

  const animals = getAnimals(day);

  const schedule = {
    [day]: {
      exhibition: animals,
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    },
  };
  return schedule;
};

const getWeeklySchedule = () => {
  const { hours } = data;
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const animals = getAnimals(day);

    if (day === 'Monday') {
      schedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: animals,
      };
    }
  });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  const { species } = data;

  if (species.some((animalName) => animalName.name === scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }

  if (openDays.includes(scheduleTarget)) {
    return getDailySchedule(scheduleTarget);
  }

  if (scheduleTarget === 'Monday') {
    return isMonday();
  }

  return getWeeklySchedule();
};

module.exports = getSchedule;
