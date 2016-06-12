'use strict';

describe('Controller: DetailviewCtrl', function () {

  // load the controller's module
  beforeEach(module('clinikoApp'));

  var DetailviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailviewCtrl = $controller('DetailviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetailviewCtrl.awesomeThings.length).toBe(3);
  });
});
