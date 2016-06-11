'use strict';

describe('Service: cliniko', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var cliniko;
  beforeEach(inject(function (_cliniko_) {
    cliniko = _cliniko_;
  }));

  it('should be defined', function () {
    expect(!!cliniko).toBe(true);
  });

  it('should be able to fetch a product by id');
  it('should be able to fetch a list of products');
  it('should be able to create a new product');

});
