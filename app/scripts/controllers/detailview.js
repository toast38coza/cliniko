'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:DetailviewCtrl
 * @description
 * # DetailviewCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('DetailviewCtrl', function ($scope, $routeParams, $location, ProductResource, StockAdjustmentResource) {
    
  	$scope.product = ProductResource.get({id: $routeParams.id});
  	
  	// todo: should warn before deleting ..
    // todo: make into a directive
  	$scope.delete = function (product){
  		ProductResource.delete({id: product.id}, function(){
  			$location.path('/');
  		});
  	};

  });
