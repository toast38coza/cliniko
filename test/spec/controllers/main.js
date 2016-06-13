'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('clinikoApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  //_$httpBackend_
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    //$httpBackend = _$httpBackend_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
