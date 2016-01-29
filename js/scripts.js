// Business Logic
function Pizza (pizzaSize, quantity) {
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.vegTopping = [];
  this.meatTopping = [];
  this.extraCheese = [];
};

Pizza.prototype.priceCalculator = function(){
  var totalPrice = 8 + (this.vegTopping.length * 1.50) + (this.meatTopping.length * 2) + (this.extraCheese.length * 2);

  if (this.pizzaSize === "small") {
    return totalPrice * this.quantity;
  } else if (this.pizzaSize === "medium") {
    return totalPrice + 4 * this.quantity;
  } else if (this.pizzaSize === "large") {
    return totalPrice + 6 * this.quantity;
  }
};


// User Logic
$(document).ready(function(){
  // On form submit, set qty and size = user input
  $("form.btn").submit(function(event) {
    var pizzaSize = $("select#size").val();
    var quantity = $("input#quantity").val();
    var newPizza = new Pizza(pizzaSize, quantity);

  //Add each checked item with cheese class to the extraCheese array

    var extraCheese = $("input.cheese:checkbox:checked").each(function(){
      newPizza.extaCheese.push(extraCheese);
    });

    //Add each checked item with veg class to the vegToppings array

    var vegToppings = $("input.veg:checkbox:checked").each(function(){
      newPizza.vegToppings.push(vegToppings);
    });

    //Add each checked item with meat class to the meatToppings array


  event.preventDefault();
  });
});
