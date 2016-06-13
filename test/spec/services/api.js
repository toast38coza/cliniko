'use strict';

describe('Service: api', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var api;
  beforeEach(inject(function (_api_) {
    api = _api_;
  }));

  it('should work', function () {
    expect(!!api).toBe(true);
  });

  it('should return configured headers', function () {
    expect(api.headers).toBeDefined();
  });

  it('should return a properly configured url', inject(function (settings) {

    var url = api.getUrl('/test/url/1');
    expect(url).toBe(settings.clinikoApiBase + '/test/url/1');

  }));

});
