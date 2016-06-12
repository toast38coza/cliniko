'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.productResource
 * @description
 * # productResource
 * Factory in the clinikoApp.
 */
angular.module('clinikoApp')
  .factory('ProductResource', function ($resource, settings) {
    // Service logic
    // ...

    // setup:
    var token = btoa(settings.clinikoApiToken+':');    
    var headers = { 
      'Authorization': 'Basic ' + token,
      'Accept': 'application/json',
      //'User-Agent': settings.clinikoVendorName + ' (' + settings.clinikoVendorEmail + ')'
    };

    // private methods:
    var getUrl = function (path){
      return settings.clinikoApiBase + path;
    };

    return $resource(
        getUrl('/v1/products/:id'), 
        { id: '@_id' },
        {
          get: { method: 'GET', data: false, headers: headers },
          query: { method: 'GET', data: false, headers: headers },
          save: { method: 'POST', headers: headers },
          update: { method: 'PUT', headers: headers },
          delete: { method: 'DELETE', headers: headers },
        }
    );
  });
