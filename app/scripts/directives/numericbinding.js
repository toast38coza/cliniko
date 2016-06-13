'use strict';

/**
 * @ngdoc directive
 * @name clinikoApp.directive:numericbinding
 * @description
 * # numericbinding
 */
angular.module('clinikoApp')
  .directive('numericbinding', function () {
    // hat-tip: 
    // http://stackoverflow.com/questions/19404969/angular-data-binding-input-type-number
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            model: '=ngModel',
        },                
        link: function (scope) {
           if (scope.model && typeof scope.model === 'string') {
               scope.model = parseInt(scope.model);
           } 
           scope.$watch('model', function(val) {
               if (typeof val === 'string') {
                   scope.model = parseInt(val);
               }
           });                 
        }
    };
  });
