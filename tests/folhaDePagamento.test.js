import { calculaDescontos, somaHorasExtras } from '../index.js';

describe('Testes dos cálculos de folha', () => {
  test('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000 ,500);
    
    expect(retornado).toBe(esperado);
  });
    
  test('Deve descontar o valor dos salários', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);
    
    expect(retornado).toBe(esperado);
  });
});
