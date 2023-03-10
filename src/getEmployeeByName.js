const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  const foundEmployee = data.employees.filter(({ firstName, lastName }) =>
    employeeName.includes(firstName) || employeeName.includes(lastName));

  const obj = foundEmployee.reduce((acc, emp) => {
    let objAcc = acc;
    objAcc = {
      id: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      managers: emp.managers,
      responsibleFor: emp.responsibleFor,
    };
    return objAcc;
  }, {});

  return obj;
};

module.exports = getEmployeeByName;
