const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
});
