(function(){
'use strict';



    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject=['$scope'];
   // LunchController.$inject=['$log'];   $scope.name= "Yaakov1abc"; 
    function LunchCheckController($scope){
  
     
     $scope.state="";

     $scope.sayMsg= function(){
   return "list comma separated dishes you usually have for lunch";
     };

     $scope.displayState=function()
     {
      if( $scope.tbinput == undefined || $scope.tbinput=="")
      {
     $scope.state ="Please enter data first";
     }
    else{ 
      var tArray=$scope.tbinput.split(",");
      if (tArray.length<=3 )
        {           $scope.state ="Enjoy";        }
     else{  $scope.state ="Too much!";}
     
    }
       
     };
    }

})();