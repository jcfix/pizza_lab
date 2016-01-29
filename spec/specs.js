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
  it ('will return price for 1 small pizza with 0 toppings', function (){
    var testPizza = new Pizza ("small", 1)
    expect(priceCalculator).to.equal(8)
  });
});

//pizza object
//pizza price calculator
