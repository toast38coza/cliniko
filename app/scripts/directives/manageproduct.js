'use strict';

/**
 * @ngdoc directive
 * @name clinikoApp.directive:manageProduct
 * @description
 * # manageProduct
 */
angular.module('clinikoApp')
  .directive('manageProduct', function () {
    return {
      templateUrl: 'views/form.html',
      restrict: 'E',
      scope: {
	  	product: '=product'
	  },
      link: function postLink(scope, element, attrs) {
        //element.text('this is the manageProduct directive');
      }
    };
  });
