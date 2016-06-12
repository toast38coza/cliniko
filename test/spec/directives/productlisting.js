'use strict';

describe('Directive: productListing', function () {

  // load the directive's module
  beforeEach(module('clinikoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('show show the product listing table', inject(function ($compile) {
    element = angular.element('<product-listing></product-listing>');
    element = $compile(element)(scope);
  }));
});
