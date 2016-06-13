'use strict';

/**
 * @ngdoc directive
 * @name clinikoApp.directive:stockAdjustmentsList
 * @description
 * # stockAdjustmentsList
 */
angular.module('clinikoApp')
  .directive('stockAdjustmentsList', function () {
    return {
      templateUrl: 'views/stockadjustments-listing.html',
      scope: {
      	product: '=product'
	  },
	  controller: ['$scope', 'StockAdjustmentResource', function($scope, StockAdjustmentResource) {
	  	
      $scope.statusMessage = 'Loading stock adjustments for ' + $scope.product.name + ' ..';
      $scope.product.$promise.then(function(product){
        $scope.statusMessage = false;        
        var params = {q: 'product_id:=' + product.id};
        $scope.stockAdjustments = StockAdjustmentResource.query(params);
      });
	  	
	  }],
      restrict: 'E'      
    };
  });
