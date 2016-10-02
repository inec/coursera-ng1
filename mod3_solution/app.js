(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('listItem', ListItem);


function ListItem() {
  var ddo = {
    templateUrl: 'foundItem.html'
  };

  return ddo;
}


function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    link: ShoppingListDirectiveLink,
    transclude: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  var keyword="egg";
  console.log("L-42-"+keyword);
  var promise = MenuSearchService.getMenuCategories(keyword);

  promise.then(function (response) {

    menu.categories = response;//.dat;

  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  
  menu.key="abc";
menu.logMenuItems = function (shortName) {
console.log("L-55"+shortName);
};
  /*menu.logMenuItems = function (shortName) {
    var promise = MenuSearchService.getMenuForCategory("ww");//shortName

    promise.then(function (response) {
	  console.log("logMenuItems");
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };*/

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function (keyw) {
    //var response =
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
    // process result and only keep items that match  categories.json menu_items.json
    var foundItems=[];//
console.log("L81-res "+keyw+ " --"+result.data.menu_items.length);


    for (var i = 0; i < 30; i++) {
      var desc = result.data.menu_items[i].description;
	  //console.log(desc);
	 	
	
		//console.log("-"+desc.toLowerCase().indexOf("oup"));
      if (desc.toLowerCase().indexOf(keyw) !== -1) {
        //foundItem.
		//console.log(desc);
	 foundItems.push(result.data.menu_items[i]);
      }
    }
    // return processed items
	console.log(foundItems.length);
    return foundItems;
});


   // return response;
  };


  service.getMenuForCategory = function (shortName) {
    console.log("shar="+shortName)
    //var response = 
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });
  
   // return response;
  };
 
function ShoppingListDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
} 
 

}

})();
