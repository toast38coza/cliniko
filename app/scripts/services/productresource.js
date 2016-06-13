'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.productResource
 * @description
 * # productResource
 * Factory in the clinikoApp.
 */
angular.module('clinikoApp')
  .factory('ProductResource', function ($resource, settings, api) {
    
    return $resource(
        api.getUrl('/v1/products/:id'), 
        { id: '@id' },
        {
          get: { method: 'GET', data: false, headers: api.headers },
          query: { method: 'GET', data: false, headers: api.headers },
          save: { method: 'POST', headers: api.headers },
          update: { method: 'PUT', data: false,  headers: api.headers },
          delete: { method: 'DELETE', headers: api.headers },
        }
    );
  });
