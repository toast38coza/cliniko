'use strict';

var example_get = {
  "id": 976065,
  "created_at": "2016-06-11T18:01:15Z",
  "updated_at": "2016-06-11T18:01:15Z",
  "code": "1",
  "name": "Widget",
  "product_supplier_name": "Acme Consulting",
  "cost_price": "80.0",
  "stock_level": 10,
  "notes": "These things are great ",
  "serial_number": "1234567890",
  "price_ex_tax": "100.0",
  "tax": {
    "links": {
      "self": "https://api.cliniko.com/v1/taxes/28470"
    }
  },
  "links": {
    "self": "https://api.cliniko.com/v1/products/976065"
  }
}

var example_create = { 
  'item_code': '0002', 
  'name': 'Product 2', 
  'product_supplier_name': 'Supplier', 
  'price': 11, 
  'cost_price': 8, 
  'stock_level': 10, 
  'tax_id': 1, 
  'serial_number': '123456' 
}

describe('Service: ProductResource', function () {

  // load the service's module
  beforeEach(module('clinikoApp'));

  // mocks:
  var $httpBackend;
  var settings;
  // instantiate service
  var ProductResource;

  beforeEach(inject(function (_ProductResource_, _$httpBackend_, _settings_) {
    ProductResource = _ProductResource_;
    $httpBackend = _$httpBackend_;
    settings = _settings_;
  }));

  it('Should be defined', function () {
    expect(!!ProductResource).toBe(true);
  });

  describe('CRUD', function () {

    it('gets a resource by id', function () {

      var expected_url = settings.clinikoApiBase + '/v1/products/1'
      $httpBackend.expectGET(expected_url, product)
                                  .respond(200, example_get);

      var product = ProductResource.get({id: '1'});
      $httpBackend.flush();

    });

    it('creates a new product', function () {

      var product = { 
        'item_code': '0002', 
        'name': 'Product 2', 
        'product_supplier_name': 'Supplier', 
        'price': 11, 
        'cost_price': 8, 
        'stock_level': 10, 
        'tax_id': 1, 
        'serial_number': '123456' 
      };
      var expected_url = settings.clinikoApiBase + '/v1/products'
      $httpBackend.expectPOST(expected_url, product)
                                  .respond(201, 'created');

      ProductResource.save(product, function(data) {
      });
      $httpBackend.flush();

    });


  });

});
