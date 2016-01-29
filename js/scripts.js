// Business Logic
function Pizza (pizzaSize, quantity) {
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.vegTopping = [];
  this.meatTopping = [];
};

Pizza.prototype.priceCalculator = function(){
  var totalPrice = 8 + (this.vegTopping.length * 1.50) + (this.meatTopping.length * 2);

  if (this.pizzaSize === "small") {
    return totalPrice * this.quantity;
  } else if (this.pizzaSize === "medium") {
    return totalPrice + 4 * this.quantity;
  }


};
