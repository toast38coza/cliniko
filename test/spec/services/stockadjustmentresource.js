'use strict';

describe('Service: StockAdjustmentResource', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var StockAdjustmentResource;
  beforeEach(inject(function (_StockAdjustmentResource_) {
    StockAdjustmentResource = _StockAdjustmentResource_;
  }));

  it('should do something', function () {
    expect(!!StockAdjustmentResource).toBe(true);
  });

});
