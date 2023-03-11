const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('retorna a relação completa do horário de funcionamento do zoológico ao não receber nenhum parâmetro', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('retorna "The zoo is closed" ao receber como parâmetro uma data/hora em que o zoológico está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('retorna "The zoo is open" ao receber como parâmetro uma data/hora em que o zoológico está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('lança o erro com a mensagem "The day must be valid. Example: Monday" ao não receber um dia da semana como primeiro parâmetro', () => {
    expect(() => { getOpeningHours('Test', '09-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('lança o erro com a mensagem "The hour must be between 0 and 12" ao não receber um número entre 0 e 12 dentro do campo que representa as horas', () => {
    expect(() => { getOpeningHours('Monday', '13:00-AM'); }).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('lança o erro com a mensagem "The minutes must be between 0 and 59" ao não receber um número entre 0 e 59 dentro do campo que representa os minutos', () => {
    expect(() => { getOpeningHours('Monday', '12:60-AM'); }).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('lança o erro com a mensagem "The hour should represent a number" ao receber um valor não númerico dentro do campo que representa as horas', () => {
    expect(() => { getOpeningHours('Monday', 'A9:00-AM'); }).toThrow(new Error('The hour should represent a number'));
  });
  it('lança o erro com a mensagem "The minutes should represent a number" ao receber um valor não númerico dentro do campo que representa os minutos', () => {
    expect(() => { getOpeningHours('Monday', '09:A0-AM'); }).toThrow(new Error('The minutes should represent a number'));
  });
  it('lança o erro com a mensagem "The abbreviation must be "AM" or "PM"" ao receber uma abraviação diferente de "AM" ou "PM"', () => {
    expect(() => { getOpeningHours('Monday', '09:00-BM'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
});
