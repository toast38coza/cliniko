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
	  	
	  	var params = {'product_id': $scope.product.id};
  		$scope.stockAdjustments = StockAdjustmentResource.query(params);

	  }],
      restrict: 'E'      
    };
  });
