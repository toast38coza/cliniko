'use strict';

/**
 * @ngdoc directive
 * @name clinikoApp.directive:productDetails
 * @description
 * # productDetails
 */
angular.module('clinikoApp')
  .directive('productDetails', function () {
    return {
      templateUrl: 'views/product-details.html',
      restrict: 'E',
      scope: {
      	product: '=product'
	  }
    };
  });


