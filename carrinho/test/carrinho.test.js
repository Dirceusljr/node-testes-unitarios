import Item from '../item.js';
import Carrinho from '../carrinho.js';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve adicionar itens no carrinho', () => {
    const item1 = new Item('Banana', 2, 5);
    const item2 = new Item('Maçã', 0.5, 1);

    const carrinho = new Carrinho();

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');

    expect(carrinho.itens[0]).toBe(item1);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve ter a propriedade total na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho () {
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar as compras', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      frete: 10,
      subtotal: 15,
      total: 25
    });
  });

  it('Calcula o preço total', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);

    const carrinho = new Carrinho();

    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(10);

    expect(carrinho.calculaTotal()).toBe(25);
  });
});