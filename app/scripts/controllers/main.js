'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('MainCtrl', function ($scope, productService, ProductResource) {
    
    $scope.products = ProductResource.query();
  	$scope.activeProduct = false;
  	
    // settings and configs:
    $scope.stockLevelSearch = 0;
    $scope.productFormIsVisible = false;

    $scope.setActiveProduct = function (product){
    	$scope.activeProduct = product;
    };

    $scope.showProductForm = function (showIt){
    	$scope.productFormIsVisible = showIt;
    };

    $scope.clearActiveProduct = function () {
    	$scope.activeProduct = false;
    };

  });
