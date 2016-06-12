'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('clinikoApp'));

  var MainCtrl, scope, $httpBackend;

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

  describe('User interface initialization', function(){
    it('Should hide the add/edit form', function(){
      expect(scope.stockLevelSearch).toBe(0);
    });
    it('Should set the stock filter to 0', function (){
      expect(scope.productFormIsVisible).toBe(false);
    });
  });

});
