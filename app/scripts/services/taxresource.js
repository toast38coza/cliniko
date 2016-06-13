'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.TaxResource
 * @description
 * # TaxResource
 * Factory in the clinikoApp.
 */
angular.module('clinikoApp')
  .factory('TaxResource', function ($resource, api) {
    
    // Public API here
    return $resource(
        api.getUrl('/v1/taxes/:id'), 
        { id: '@id' },
        {
          query: { method: 'GET', data: false, headers: api.headers },          
        }
    );
  });
