import Item from '../item.js';

describe('Testes dos itens', () => {
  it('Deve ter 3 campos no item: nome, valor e quantidade', () => {
    const item = new Item('beterraba', 2.5, 10);
    
    expect(item.nome).toBe('beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('batata', 0.1, 3);

    // expect(item.pegaValorTotalItem()).toBe(0.3); Erro na precisão devido aos floats
    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
  });
});

