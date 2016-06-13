'use strict';

/**
 * @ngdoc directive
 * @name clinikoApp.directive:manageProduct
 * @description
 * # manageProduct
 */
angular.module('clinikoApp')
  .directive('manageProduct', function (ProductResource) {
    return {
      templateUrl: 'views/form.html',
      restrict: 'E',
      scope: {
      	products: '=products',
	  	product: '=product',
	  	mode: '=mode'
	  },
	  controller: ['$scope', '$location', function($scope, $location) {

	  	var errorResponse = function (error) {
	  		$scope.formStatus.saving = false;
  			$scope.formStatus = error.data;
  		};

  		var successResponse = function (data) {   			 		
  			$scope.formStatus.saving = false;	
  			$location.path('/detail/' + data.id);
  		};

	  	$scope.formStatus = {};
	  	$scope.save = function (){	  

	  		$scope.formStatus.saving = true;
	  		// or update if: $scope.product.id	  		
	  		if ($scope.product.id){
	  			$scope.product.$update(
	  						successResponse,
	  						errorResponse);	
	  			$scope.formStatus.message = 'updating (' + $scope.product.id + ')' + $scope.product.name + ' ..';
	  		
	  		} else {

	  			ProductResource.save($scope.product, 
	  							successResponse, 
	  							errorResponse);	
	  			$scope.formStatus.message = 'Adding product ..';
	  		}	  		
	  		
	  	};

	  }]
	  /*,
      link: function postLink(scope, element, attrs) {
        //element.text('this is the manageProduct directive');
      }*/
    };
  });
