'use strict';

describe('Service: StockAdjustmentResource', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var StockAdjustmentResource, $httpBackend, api;
  beforeEach(inject(function (_StockAdjustmentResource_, _$httpBackend_, _api_) {
    StockAdjustmentResource = _StockAdjustmentResource_;
    $httpBackend = _$httpBackend_;
    api = _api_;
  }));

  it('should work', function () {
    expect(!!StockAdjustmentResource).toBe(true);
  });

  it('should be able to get stock adjustments for a product', function () {
    var expected_url = api.getUrl('/v1/stock_adjustments?q=product_id:%3D123')
    $httpBackend.expectGET(expected_url)
                    .respond(200, '');

    var params = {q: 'product_id:=123'  };
    var result = StockAdjustmentResource.query(params);
    $httpBackend.flush()

  });

});
