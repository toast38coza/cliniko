'use strict';

describe('Directive: stockAdjustmentsList', function () {

  // load the directive's module
  beforeEach(module('clinikoApp'));

  var element, scope, controller, $httpBackend;

  beforeEach(inject(function ($rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<stock-adjustments-list></stock-adjustments-list>');
    element = $compile(element)(scope);  

  }));

  describe('Testing controller:', function (){
    beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {

      _$httpBackend_.expectGET('views/stockadjustments-listing.html')
                          .respond(200, '...');
      
      scope.product = {
        name: 'some product',
        $promise: {
          then: function () {

          }
        }
      };

      element = angular.element('<stock-adjustments-list product=product></stock-adjustments-list>');
      element = $compile(element)(scope);  

      $httpBackend.flush();
      scope.$digest();
      controller = element.controller();
      scope = element.isolateScope() || element.scope();
    }));


  });

});
