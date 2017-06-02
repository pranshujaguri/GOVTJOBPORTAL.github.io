'use strict';

/**
 * @ngdoc overview
 * @name myPortalApp
 * @description
 * # myPortalApp
 *
 * Main module of the application.
 */
angular
  .module('myPortalApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
       controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl',
      controllerAs: 'about'
      })
    .when('/states', {
        templateUrl: 'views/States.html',
        controller: 'statecontrollerCtrl',
      controllerAs: 'statectrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
