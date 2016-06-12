'use strict';

describe('Directive: manageProduct', function () {

  // load the directive's module
  beforeEach(module('clinikoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should display the add/edit form', inject(function ($compile) {
    element = angular.element('<manage-product></manage-product>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the manageProduct directive');
  }));
});
