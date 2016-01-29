describe('pizza', function(){
  it('will create a pizza with the given properties', function(){
    var pizza = new Pizza ("small", 1);
    expect(pizza.pizzaSize).to.equal("small");
    expect(pizza.quantity).to.equal(1);
    expect(pizza.topping).to.equal([]);
  });
});
