
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBroughtShoppingController', AlreadyBroughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  //var itemAdder = this;
    var showList = this;
  //itemAdder.itemName = "";itemAdder.itemQuantity = "";
  showList.items = ShoppingListCheckOffService.getItems();
  
    showList.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
  
  showList.addItem = function () {
    ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }
}


AlreadyBroughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBroughtShoppingController(ShoppingListCheckOffService) {
  var showList = this;


  showList.newitems = ShoppingListCheckOffService.getNewItems();
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
    quantity: "3"
  },
  {
    name: "Donuts",
    quantity: "22"
  },
  {
    name: "cookies",
    quantity: "9"
  },
  {
    name: "Chips",
    quantity: "5"
  },
  {
    name: "Juices",
    quantity: "3"
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

    var nItem = items.splice(itemIdex, 1);
    //console.log(nItem);console.log(nItem[0]);   // console.log(itemIdex);
      //       var oneitem = {    name: "aName",      quantity: 9};console.log(NewItems);
      NewItems.push(nItem[0]);
      
  };

  service.getItems = function () {
    return items;
  };
  service.getNewItems = function () {
    return NewItems;
  };
}

})();
