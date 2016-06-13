'use strict';

describe('Service: TaxResource', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var TaxResource, $httpBackend, api;
  beforeEach(inject(function (_TaxResource_, _$httpBackend_, _api_) {
    TaxResource = _TaxResource_;
    $httpBackend = _$httpBackend_;
    api = _api_;
  }));

  it('should be error free', function () {
    expect(!!TaxResource).toBe(true);
  });

  it('should be able to get all the taxes', function () {

    $httpBackend.expectGET(api.getUrl('/v1/taxes'))
                              .respond(200, '');

    var taxes = TaxResource.query();
    $httpBackend.flush();

  });

});
