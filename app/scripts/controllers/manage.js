'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('ManageCtrl', function ($scope, $routeParams, ProductResource) {
    $scope.mode = 'add';
    $scope.loading = false;
    if ($routeParams.id){
    	$scope.loading = true;
    	$scope.mode = 'edit';
    	$scope.product = ProductResource.get(
    							{id: $routeParams.id},
    							function () {
    								$scope.loading = false;
    							});
    }

  });
