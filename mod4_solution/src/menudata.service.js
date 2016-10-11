(function () {
"use strict";

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject=['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    var promise= $http({
     url: 'https://davids-restaurant.herokuapp.com/categories.json',method:"GET" 
    } );
   // .then(function (response) {   return response.data; });
console.log("serv L12");
console.log(JSON.stringify(promise) );
    return promise;
  };

  service.getItemForCategory = function (categoryShortNam) {
    var promise= $http({
         url:"https://davids-restaurant.herokuapp.com/menu_items.json",
         params:{'category':categoryShortName}
    }   );


    return promise;
  };


}



})();