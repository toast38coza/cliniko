'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.productService
 * @description
 * # productService
 * Service in the clinikoApp.
 */
angular.module('clinikoApp')
  .service('productService', function ($resource, settings) {

  	// setup:
  	var token = btoa(settings.clinikoApiToken+':');    
    var headers = { 
      'Authorization': 'Basic ' + token,
      'Accept': 'application/json',
      'User-Agent': settings.clinikoVendorName + ' (' + settings.clinikoVendorEmail + ')'
    };

    // private methods:
    var getUrl = function (path){
      return settings.clinikoApiBase + path;
    };
    var productResource = $resource(
        getUrl('/v1/products/:id'), 
        { id: '@_id' },
        {
          get: { method: 'GET', data: false, headers: headers },
          query: { method: 'GET', data: false, headers: headers }
        }
    );
  	// public interface
  	var api = {
  		resource: productResource,
  		getProducts: function(){
  			return {"products":[{"id":976065,"created_at":"2016-06-11T18:01:15Z","updated_at":"2016-06-11T18:01:15Z","code":"1","name":"Widget","product_supplier_name":"Acme Consulting","cost_price":"80.0","stock_level":10,"notes":"These things are great ","serial_number":"1234567890","price_ex_tax":"100.0","tax":{"links":{"self":"https://api.cliniko.com/v1/taxes/28470"}},"links":{"self":"https://api.cliniko.com/v1/products/976065"}}],"total_entries":1,"links":{"self":"https://api.cliniko.com/v1/products?page=1"}}
  			//api.products = productResource.query();
  			//return api.products;
  		}
  	};

  	return api;
    
  });
