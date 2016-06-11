'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.cliniko
 * @description
 * # cliniko
 * Service in the clinikoApp.
 */
angular.module('clinikoApp')
  .service('cliniko', function ($resource) {

    var headers = { 
      'Authorization': 'Basic MWJiODA4ZGNkYWU3ZDdmN2U4MWIzOThlNWY2ZjZiNmU6',
      'Accept': 'application/json',
      'User-Agent': 'Toast38coza (info@38.co.za)'
    };
    
    /*var headers = {
      "Authorization": "token 1a44185c2bb2aa846c9b3407c8ee5332e4b67c41"
    };*/

    return $resource(
              'http://docker.local:8000/v1/products/:id', 
              { id: '@_id' },
              {
                get: {
                  method: 'GET',
                  data: false,
                  headers: headers
                },
                query: {
                  method: 'GET',
                  data: false,
                  headers: headers
                }
              }
            );

    /*return $resource(
              'https://api.cliniko.com/v1/products/:id', 
              { id: '@_id' }, 
              {
                get: getSettings,
                query: getSettings
              });*/

  });
