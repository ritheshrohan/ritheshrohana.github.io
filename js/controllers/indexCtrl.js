var portfolioApp = angular.module('portfolioApp',['ngRoute','ngAnimate']);

portfolioApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/home',
    {
        controller:'indexController',
        templateUrl:'mainBody.html'
    })
    .when('/about',
    {
        controller:'aboutController',
        templateUrl:'about.html'
    })
    .when('/work',
    {
        controller:'workController',
        templateUrl:'work.html'
    })
    .when('/contact',
    {
        controller:'contactController',
        templateUrl:'contact.html'
    })
    .when('/portfolio',
    {
        controller:'portfolioController',
        templateUrl:'portfolio.html'
    })
    .otherwise({redirectTo:'/home'});

}]);

portfolioApp.controller('indexController',['$scope',function($scope){

$scope.array = [
  {name:'Home', url:'home'},
{name:'About', url:'about'},
{name:'Work', url:'work'},
{name:'Contact', url:'contact'}
  ];

}]);
