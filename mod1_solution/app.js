(function(){
'use strict';



    angular.module('LunchCheck',[])
    .controller('LunchController', LunchController);
    //.controller('LunchController',function($scope){        $scope.name="yakov";    });

    LunchController.$inject=['$scope'];

    function LunchController($scope){
     $scope.name= "Yaakov1abc"; 
     
     $scope.sayMsg= function(){
   return "test function";
     };
    }

})();