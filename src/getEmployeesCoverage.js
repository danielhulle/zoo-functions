const data = require('../data/zoo_data');

const allEmployees = (param) => {
  const allEmployeesCoverage = [];
  data.employees.reduce((acc, curr) => {
    let objAcc = acc;
    objAcc = {
      id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: curr.responsibleFor
        .map((responsibleId) => data.species.find(({ id }) => id === responsibleId).name),
      locations: curr.responsibleFor
        .map((responsibleId) => data.species.find(({ id }) => id === responsibleId).location),
    };
    return allEmployeesCoverage.push(objAcc);
  }, {});
  return allEmployeesCoverage;
};

const targetEmployee = (target) => {
  const employeeCoverage = target.reduce((acc, curr) => {
    let objAcc = acc;
    objAcc = {
      id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: curr.responsibleFor
        .map((responsibleId) => data.species.find(({ id }) => id === responsibleId).name),
      locations: curr.responsibleFor
        .map((responsibleId) => data.species.find(({ id }) => id === responsibleId).location),
    };
    return objAcc;
  }, {});
  return employeeCoverage;
};

const verifyEmployee = (employee) => {
  if (employee) {
    const employeeInfo = data.employees.filter(({ firstName, lastName, id }) =>
      employee.name === firstName || employee.name === lastName || employee.id === id);
    if (employeeInfo.length === 0) {
      throw new Error('Informações inválidas');
    }
  }
};

const getEmployeesCoverage = (employee) => {
  verifyEmployee(employee);

  if (!employee) return allEmployees();

  const employeeInfo = data.employees.filter(({ firstName, lastName, id }) =>
    employee.name === firstName || employee.name === lastName || employee.id === id);
  return targetEmployee(employeeInfo);
};

module.exports = getEmployeesCoverage;
