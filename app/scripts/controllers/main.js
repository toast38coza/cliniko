'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('MainCtrl', function ($scope, ProductResource) {
    
    $scope.statusMessage = 'loading ...';
    $scope.products = ProductResource.query(function(){
      $scope.statusMessage = false;
    });

    // settings and configs:
    $scope.stockLevelSearch = 0;

  });
