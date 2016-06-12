'use strict';

describe('Service: settings', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // instantiate service
  var settings;
  beforeEach(inject(function (_settings_) {
    settings = _settings_;
  }));

  it('should be defined', function () {
    expect(!!settings).toBe(true);
  });

  it ("sets all required variables", function () {

    var expected_fields = [
      'clinikoApiBase', 
      'clinikoVendorName', 
      'clinikoVendorEmail',
      'clinikoApiToken'
    ];
    angular.forEach(expected_fields, function(field) {
      
      expect(settings[field]).toBeDefined();
    });
  });


});
