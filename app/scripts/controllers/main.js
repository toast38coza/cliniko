'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('MainCtrl', function ($scope, cliniko) {
        
  	$scope.products = cliniko.query();

  	var data = {id: '976065'};
    $scope.product = cliniko.get(data);

  });
