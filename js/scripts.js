// Business Logic
function Pizza (pizzaSize, quantity) {
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.extraCheese = [];
  this.vegTopping = [];
  this.meatTopping = [];
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


$(document).ready(function() {

  // On form submit, set qty and size = user input
  $("form#orderForm").submit(function(event) {
    var pizzaSize = $("select#size").val();
    var quantity = $("input#quantity").val();

    var newPizza = new Pizza(pizzaSize, quantity);
    // debugger;

    //Add each checked item with cheese class to the extraCheese array
    var extraCheese = $("input.cheese:checkbox:checked").each(function() {
      newPizza.extraCheese.push(extraCheese);
    });

    //Add each checked item with veg class to the vegToppings array
    var vegTopping = $("input.veg:checkbox:checked").each(function() {
      newPizza.vegTopping.push(vegTopping);
    });

    //Add each checked item with meat class to the meatToppings array
    var meatTopping = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatTopping.push(meatTopping);
    });

    //Runs priceCalculator function on the newPizza object
    var pizzaPrice = newPizza.priceCalculator();


    //prints price to page
    $("#price").text(pizzaPrice);

    //show results div
    $("#results").show();

    event.preventDefault();
  });
});
