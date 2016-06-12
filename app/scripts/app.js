'use strict';

/**
 * @ngdoc overview
 * @name clinikoApp
 * @description
 * # clinikoApp
 *
 * Main module of the application.
 */
angular
  .module('clinikoApp', [
    'ngRoute', 'ngResource'
  ])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
