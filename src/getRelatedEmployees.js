const data = require('../data/zoo_data');

const isManager = (id) => {
  const findManager = data.employees.some(({ managers }) => managers.includes(id));

  return findManager;
};

const validateManager = (managerId) => {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

const getRelatedEmployees = (managerId) => {
  validateManager(managerId);

  const relatedEmployees = data.employees.filter(({ managers }) => managers.includes(managerId));
  const employeesNames = relatedEmployees
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return employeesNames;
};

module.exports = { isManager, getRelatedEmployees };
