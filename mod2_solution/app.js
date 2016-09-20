
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBroughtShoppingController', AlreadyBroughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.itemName = "";
  itemAdder.itemQuantity = "";

  itemAdder.addItem = function () {
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}


AlreadyBroughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBroughtShoppingController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();

  showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var NewItems=[];
  var items = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "6"
  }
];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    newitems.push(item);
  };

  service.removeItem = function (itemIdex) {
    console.log(itemIdex);
    var nItem = items.splice(itemIdex, 1);
    console.log(nItem);
      console.log(nItem[0]);
      
       var item = {
      name: "aName",
      quantity: 9
    };
      NewItems.push(item);
      console.log(NewItems.length);
  };

  service.getItems = function () {
    return items;
  };
}

})();
