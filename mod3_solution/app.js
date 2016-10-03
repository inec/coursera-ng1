(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);
//.directive('foundItems', FoundItems);
/*.directive('listItem', ListItem);
function ListItem() {
  var ddo = {
    
    templateUrl: 'foundItems.html'

  };

  return ddo;
}*/
function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
	  //found :'<','=foundItem',
      menu : '=foundItem',
	  titlep:'@titleA',
	  //onRemove: '@removeItem',
      title: '@title'
	  
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  
  menu.found=[];
  menu.keyw="";
  menu.title="Smenutile-36E";
  menu.titleA="S-AA-E";

   
   
menu.lookupMenuItems = function () {
  

var promise = MenuSearchService.getMatchedMenuItems(menu.keyw);

promise.then(function (response) {

    menu.categories = response;//.dat;
    menu.found=response;
   //onsole.log("L-57="+menu.found.length);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  
//onsole.log("L-55"+menu.keyw);

};

// list.removeItem
menu.removeItem = function (itemIndex) {

    console.log(itemIndex);
    //onsole.log("l-67"+found.length);
    console.log("'this' is: ", this);
    menu.found.splice(itemIndex+1,1);
 
   // this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    //shoppingList.removeItem(itemIndex);
    //this.title = origTitle + " (" + list.items.length + " items )";
};

menu.onRemove = function (itemIndex) {

    //onsole.log(itemIndex.index);
    //onsole.log("l-67"+found.length);
    //onsole.log("'this' is: ", this);
    menu.found.splice(itemIndex.index,1);
 

};

menu.notFound=function(){
console.log("menu.found "+menu.found.length);
if (menu.keyw.trim()=="")
{
 return true;

}
else
{
 if (menu.found.length==0)
 {
  return true;
  
 }
 else
 {
 return false;;
 }
}
};


  /*
  menu.notFound=function()
{
return true;
};
  menu.logMenuItems = function (shortName) {
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

  service.getMatchedMenuItems = function (keyw) {
    //var response =getMatchedMenuItems getMenuCategories
	
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
    // process result and only keep items that match  categories.json menu_items.json
	
    var foundItemss=[];
    var tcount=result.data.menu_items.length;
    //tcount=30;
	keyw=keyw.toLowerCase();

if (keyw.trim()!=""){	
    for (var i = 0; i < tcount; i++) {
      var desc = result.data.menu_items[i].description;
      if (desc.toLowerCase().indexOf(keyw) !== -1) {
    	 foundItemss.push(result.data.menu_items[i]);
      }
    }
}	
    // return processed items
	console.log(foundItemss.length);
    return foundItemss;

}
);


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
