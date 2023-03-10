const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const ages = entrants.map(({ age }) => age);
  const countChild = ages.filter((idade) => idade < 18);
  const countAdult = ages.filter((idade) => idade >= 18 && idade < 50);
  const countSenior = ages.filter((idade) => idade >= 50);
  const countVisitors = {
    child: countChild.length,
    adult: countAdult.length,
    senior: countSenior.length,
  };
  return countVisitors;
};

const calculateEntry = (entrants) => {
  if (!entrants || !entrants.length) return 0;
  const childTicketValue = data.prices.child;
  const adultTicketValue = data.prices.adult;
  const seniorTicketValue = data.prices.senior;

  const childTickets = Object.values(countEntrants(entrants))[0] * childTicketValue;
  const adultTickets = Object.values(countEntrants(entrants))[1] * adultTicketValue;
  const seniorTickets = Object.values(countEntrants(entrants))[2] * seniorTicketValue;

  const totalTicketIncome = childTickets + adultTickets + seniorTickets;

  return totalTicketIncome;
};

module.exports = { calculateEntry, countEntrants };
