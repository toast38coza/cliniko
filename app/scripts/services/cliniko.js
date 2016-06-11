'use strict';

/**
 * @ngdoc service
 * @name clinikoApp.cliniko
 * @description
 * # cliniko
 * Service in the clinikoApp.
 */
angular.module('clinikoApp')
  .service('cliniko', function () {
    
  	// private methods:
  	var _call = function (path, data) {
  		// ..
  	}

    // public methods:
    var api = {

    	getProducts: function () {
    		return [
		      'HTML5 Boilerplate',
		      'AngularJS',
		      'Karma'
		    ];
    	}

    };


  	return api;

  });
