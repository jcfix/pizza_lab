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

// User Logic
$(document).ready(function() {


  $("form#orderForm").submit(function(event) {
    var pizzaSize = $("select#size").val();
    var quantity = $("input#quantity").val();

    var newPizza = new Pizza(pizzaSize, quantity);


    var extraCheese = $("input.cheese:checkbox:checked").each(function() {
      newPizza.extraCheese.push(extraCheese);
    });

    var vegTopping = $("input.veg:checkbox:checked").each(function() {
      newPizza.vegTopping.push(vegTopping);
    });

    var meatTopping = $("input.meat:checkbox:checked").each(function() {
      newPizza.meatTopping.push(meatTopping);
    });

    var pizzaPrice = newPizza.priceCalculator();


    $("#price").text(pizzaPrice);

    $("#results").fadeIn(200);

      // $("#results").addClass('animated zoomInLeft');


    event.preventDefault();
  });
});
