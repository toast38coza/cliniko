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
	  	showProductForm: '=showProductForm'
	  },
	  controller: ['$scope', function($scope) {

	  	var genericErrorResponse = function (error) {
  			$scope.formStatus = error.data;
  		};

  		var createSuccessResponse = function () {
  			$scope.products.products.push($scope.product);
  		};

  		var updateSuccessResponse = function () {
  			// ...
  		};

	  	$scope.formStatus = {};
	  	$scope.add = function (){	  

	  		// or update if: $scope.product.id
	  		if ($scope.product.id){

	  			ProductResource.update(
	  						{id: $scope.product.id},
	  						updateSuccessResponse,
	  						genericErrorResponse);	
	  			$scope.statusMessage = 'updating (' + $scope.product.id + ')' + $scope.product.name + ' ..';
	  		
	  		} else {

	  			ProductResource.save($scope.product, 
	  							createSuccessResponse, 
	  							genericErrorResponse);	
	  			$scope.statusMessage = 'Adding product ..';
	  		}	  		
	  		
	  	};

	  	$scope.delete = function (product) {	  		
	  		ProductResource.delete({id: product.id}, function (){
	  			// remove it from the list
	  		});
	  	};


	  }]
	  /*,
      link: function postLink(scope, element, attrs) {
        //element.text('this is the manageProduct directive');
      }*/
    };
  });
