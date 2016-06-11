'use strict';

describe('Service: cliniko', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var cliniko;
  beforeEach(inject(function (_cliniko_) {
    cliniko = _cliniko_;
  }));

  it('should do something', function () {
    expect(!!cliniko).toBe(true);
  });

});
