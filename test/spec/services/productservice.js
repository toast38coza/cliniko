'use strict';


var spyResource = function (name) {
 var resourceSpy = jasmine.createSpy(name + ' resource constructor').and.callFake(function () { angular.copy({}, this); });
 
 resourceSpy['get'] = resourceSpy.prototype['get'] = jasmine.createSpy('get');
 resourceSpy['$save'] = resourceSpy.prototype['$save'] = jasmine.createSpy('$save');
 resourceSpy['$delete'] = resourceSpy.prototype['$delete'] = jasmine.createSpy('$delete');
 
 return resourceSpy;
};

describe('Service: productService', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var productService;
  beforeEach(inject(function (_productService_) {
    productService = _productService_;
  }));

  it('should be defined', function () {
    expect(!!productService).toBe(true);
  });

  describe('public interface', function () {

    
  });

  describe("CRUD", function () {

    
    
  });


});
