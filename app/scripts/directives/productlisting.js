'use strict';

/**
 * @ngdoc directive
 * @name clinikoApp.directive:productListing
 * @description
 * # productListing
 */
angular.module('clinikoApp')
  .directive('productListing', function () {
    return {
      templateUrl: 'views/product-listing.html',
      restrict: 'E'      
    };
  });
