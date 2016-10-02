(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('listItem', ListItem);
//.directive('listItem', ListItem);

function ListItem() {
  var ddo = {
    
    templateUrl: 'foundItems.html'

  };

  return ddo;
}




NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  var found=[];
  menu.keyw="";
  menu.title="menutile";
menu.lookupMenuItems = function () {
  
  console.log("L-42-"+ menu.keyw);
  var promise = MenuSearchService.getMenuCategories(menu.keyw);

  promise.then(function (response) {

    menu.categories = response;//.dat;
    found=response;
    console.log("L39-found.length is "+found.length);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  


console.log("L-55"+menu.keyw);
};

// list.removeItem
menu.removeItem = function (itemIndex) {

    console.log(itemIndex);
      console.log(found.length);
    console.log("'this' is: ", this);
    found.splice(itemIndex,1);
    console.log(found.length);
   // this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    //shoppingList.removeItem(itemIndex);
    //this.title = origTitle + " (" + list.items.length + " items )";
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

var tcount=result.data.menu_items.length;
tcount=30;
    for (var i = 0; i < tcount; i++) {
      var desc = result.data.menu_items[i].description;
	  //console.log(desc);
	 	
	keyw=keyw.toLowerCase();
		//console.log("-"+desc.toLowerCase().indexOf("oup"));
      if (desc.toLowerCase().indexOf(keyw) !== -1) {
        //foundItem.

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
 
/*function ShoppingListDirectiveController() {
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
} */
 

}

})();
