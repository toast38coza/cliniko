'use strict';

describe('Directive: manageProduct', function () {

  // load the directive's module
  beforeEach(module('clinikoApp'));

  var element, scope, controller;

  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
    scope = $rootScope.$new();
    element = angular.element('<manage-product></manage-product>');
    element = $compile(element)(scope);
    
  }));

  it('should display the add/edit form', inject(function () {
    
    //expect(element.text()).toBe('this is the manageProduct directive');
  }));

  describe('Controller:', function (){
    beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {

      _$httpBackend_.expectGET('views/form.html')
                          .respond(200, '...');
      scope.$digest();
      controller = element.controller;

    }));
    
  });

});
