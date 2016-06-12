'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.settings
 * @description
 * # settings
 * Service in the clinikoApp.
 */
angular.module('clinikoApp')
  .service('settings', function () {
    
    return {
        'clinikoApiBase': 'http://docker.local:8000',
        'clinikoApiToken': '1bb808dcdae7d7f7e81b398e5f6f6b6e',
        'clinikoVendorName': 'Toast38coza', 
        'clinikoVendorEmail': 'info@38.co.za'
    } 

  });
