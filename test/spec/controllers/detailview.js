'use strict';

describe('Controller: DetailviewCtrl', function () {

  // load the controller's module
  beforeEach(module('clinikoApp'));

  var DetailviewCtrl, scope, $httpBackend, api;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _api_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    api = _api_;
    

    DetailviewCtrl = $controller('DetailviewCtrl', {
      $scope: scope,
      $routeParams: {id:123}     
      // place here mocked dependencies
    });
  }));

  it('should load the selected product', function () {

    var expected_url = api.getUrl('/v1/products/123');
    $httpBackend.expectGET(expected_url)
                    .respond(200,'');
    $httpBackend.flush();

  });

});
