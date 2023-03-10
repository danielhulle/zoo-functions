const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('retorna undefined ao não receber nenhum parâmetro', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('retorna "Parâmetro inválido, é necessário uma string" ao receber um valor diferente de string como parâmetro', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('retorna a quantidade de elefantes ao receber "count" como parâmetro', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes ao receber "names" como parâmetro', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('retorna a média de idade dos elefantes ao receber "averageAge" como parâmetro', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('retorna a localização dos elefantes dentro do zoológico ao receber "location" como parâmetro', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('retorna a popularidade dos elefantes ao receber "popularity" como parâmetro', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes ao receber "availability" como parâmetro', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('retorna null ao receber uma string vazia como parâmetro', () => {
    expect(handlerElephants('')).toBe(null);
  });
});
