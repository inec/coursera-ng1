(function () {
"use strict";

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getAllCategories = function () {
    var promise= $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (response) {
      return response.data;
    });

    return promise;
  };

  service.getItemForCategory = function () {
    var promise= $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (response) {
      return response.data;
    });

    return promise;
  };


}



})();