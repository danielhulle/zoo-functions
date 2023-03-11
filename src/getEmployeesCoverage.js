const data = require('../data/zoo_data');

const getEmployeesCoverage = (obj) => {
  const findEmployee = data.employees.filter(({ firstName }) => obj.name === firstName);
  const employeeCoverage = findEmployee.reduce((acc, curr) => {
    let objAcc = acc;
    objAcc = {
      id: curr.id,
      fullName: `${curr.firstName} ${curr.lastName}`,
      species: curr.responsibleFor,
    };
    return objAcc;
  }, {});
  return employeeCoverage;
};

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
