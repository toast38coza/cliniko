'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.StockAdjustmentResource
 * @description
 * # StockAdjustmentResource
 * Factory in the clinikoApp.
 */
angular.module('clinikoApp')
  .factory('StockAdjustmentResource', function ($resource, settings) {
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
        getUrl('/v1/stock_adjustments/:id'), 
        { id: '@_id' },
        {
          query: { method: 'GET', data: false, headers: headers },          
        }
    );
  });
