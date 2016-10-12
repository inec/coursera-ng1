(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider']
function RoutesConfig($stateProvider, $urlRouterProvider){
    console.log("route l-9");
    $urlRouterProvider.otherwise("/");

    $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

    .state('categories',{
        url:'/categories',
        templateUrl:'src/templates/category.template.html',
        controller:'CategoryController as categoryCtl',
         resolve:{
            categories:['MenuDataService',function MenuDataService(MenuDataService){
                return MenuDataService.getAllCategories();
            }]

        }
    })

    .state('categories.itemDetails',{
        url:'/item-details/{itemShortName}/{menuIndex}',
        templateUrl:'source/category/template/item-details.template.html',
        resolve:{
            item:['$stateParams','MenuDataService',function MenuDataService($stateParams,MenuDataService){
                return MenuDataService.getItemsForCategory($stateParams.itemShortName);
            }]
        },
        controller:'ItemDetailsCOntroller as ItemDetailsCtrl'
    })
}



})();
