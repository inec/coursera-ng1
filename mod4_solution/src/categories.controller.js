(function () {
'use strict';

angular.module('data')
.controller('CategoryController',CategoryController);

CategoryController.$inject=['categories']
function CategoryController(categories){
    var categoryCtl=this;
   
    categoryCtl.List=categories;
     console.log(categoryCtl.List.length);
}
})();