'use strict';

describe('Directive: stockAdjustmentsList', function () {

  // load the directive's module
  beforeEach(module('clinikoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stock-adjustments-list></stock-adjustments-list>');
    element = $compile(element)(scope);    
  }));
});
