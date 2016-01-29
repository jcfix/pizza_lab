describe('pizza', function(){
  it('will create a pizza with the given properties', function(){
    var testPizza = new Pizza ("small", 1);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.vegTopping).to.eql([]);
    expect(testPizza.meatTopping).to.eql([]);
  });
});

describe ('priceCalculator', function (){
  it('will return price for 1 small pizza with 0 toppings', function (){
    var testPizza = new Pizza ("small", 1);
    expect(testPizza.priceCalculator()).to.equal(8)
  });
  it('will return price for 1 medium pizza with 0 toppings', function(){
    var testPizza = new Pizza ("medium", 1);
    expect(testPizza.priceCalculator()).to.equal(12)
  });
  it('will return price for 1 large pizza with 0 toppings', function (){
    var testPizza = new Pizza ("large", 1);
    expect(testPizza.priceCalculator()).to.equal(14)
  });

});
