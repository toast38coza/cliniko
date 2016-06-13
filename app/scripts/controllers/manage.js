'use strict';

/**
 * @ngdoc function
 * @name clinikoApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the clinikoApp
 */
angular.module('clinikoApp')
  .controller('ManageCtrl', function (ProductResource) {
    $scope.mode = 'add';
    if ($routeParams.id){
    	$scope.mode = 'edit';
    	$scope.product = ProductResource.get({id: $routeParams.id});
    }
    
  });
