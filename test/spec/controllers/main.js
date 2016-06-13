'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('clinikoApp'));

  var MainCtrl, scope, $httpBackend, api;

  // Initialize the controller and a mock scope
  //_$httpBackend_
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _api_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    api = _api_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should display a loading message', function () {
    expect(scope.statusMessage).toBeDefined();
  });

  it('should fetch all the products', function () {
    $httpBackend.expectGET(api.getUrl('/v1/products'))
      .respond(200, '');
    $httpBackend.flush();
  });

  it('should hide the loading message once the products are loaded', function () {
    $httpBackend.expectGET(api.getUrl('/v1/products'))
      .respond(200, '');
    $httpBackend.flush();
    expect(scope.statusMessage).toBe(false);
  });

});
