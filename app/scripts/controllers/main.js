'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('MainCtrl', function ($scope, productService) {
    
    //$scope.products = productService.resource.query();    
  	$scope.products = productService.getProducts();
  	$scope.activeProduct = false;
  	//productService.refreshProducts();
  	//var data = {id: '976065'};
    //$scope.product = cliniko.get(data);

    // settings and configs:
    $scope.stockLevelSearch = 0;
    $scope.productFormIsVisible = false;

    $scope.setActiveProduct = function (product){
    	$scope.productFormIsvisible = true;
    	$scope.activeProduct = product;
    };
    $scope.showProductForm = function (){
    	$scope.productFormIsvisible = true;
    };

    $scope.clearActiveProduct = function () {
    	$scope.activeProduct = false;
    };

  });
