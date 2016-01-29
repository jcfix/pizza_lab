describe('pizza', function(){
  it('will create a pizza with the given properties', function(){
    var testPizza = new Pizza ("small", 1);
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.vegTopping).to.eql([]);
    expect(testPizza.meatTopping).to.eql([]);
  });
});


//pizza object
//pizza price calculator
