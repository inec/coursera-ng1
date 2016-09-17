(function(){
'use strict';



    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    //.controller('LunchController',function($scope){        $scope.name="yakov";    });

    LunchCheckController.$inject=['$scope','$log'];
   // LunchController.$inject=['$log'];
    function LunchCheckController($scope){
     $scope.name= "Yaakov1abc"; 
     
     $scope.state="";

     $scope.sayMsg= function(){
   return "list comma separated dishes you usually have for lunch";
     };

     $scope.displayState=function()
     {
     // console.log( $scope.tbinput );
      //var tArray=[];
      if( $scope.tbinput == undefined || $scope.tbinput=="")
      {
     $scope.state ="Please enter data first";
     }
    else{ 
    var tArray=$scope.tbinput.split(",");
     if (tArray.length<=3 )
     {
           $scope.state ="Enjoy";
     }
     else{  $scope.state ="Too much!";}
    }
       
     };
    }

})();