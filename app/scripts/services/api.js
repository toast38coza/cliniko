'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.api
 * @description
 * # api
 * Service in the clinikoApp.
 */
angular.module('clinikoApp')
  .service('api', function (settings) {
    
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

    return {
    	headers: headers,
    	getUrl: getUrl
    };

  });
