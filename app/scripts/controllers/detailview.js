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
  	var params = {'product_id': $routeParams.id};
  	$scope.stockAdjustments = StockAdjustmentResource.query(params);

  	// todo: should warn before deleting ..
  	$scope.delete = function (product){
  		ProductResource.delete({id: product.id}, function(){
  			$location.path('/');
  		});
  	};

  });
