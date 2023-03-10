const data = require('../data/zoo_data');

const isManager = (id) => {
  const findManager = data.employees.some(({ managers }) => managers.includes(id));

  return findManager;
};

const checkManager = (managerId) => {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
};

const getRelatedEmployees = (managerId) => {
  try {
    checkManager(managerId);
    const relatedEmployees = data.employees.filter(({ managers }) => managers.includes(managerId));
    const employeesNames = relatedEmployees
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

    return employeesNames;
  } catch (error) {
    return error.message;
  }
};

// console.log(getRelatedEmployees('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = { isManager, getRelatedEmployees };
