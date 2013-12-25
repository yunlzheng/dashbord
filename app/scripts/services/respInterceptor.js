'use strict';

angular.module('dashbordApp')
  .factory('Respinterceptor', ['$q', 'notify', function Respinterceptor($q, notify) {
    
    return function(promise){

    	return promise.then(function(response){

    		return response;

    	}, function(response){

    		if(response.config.headers['X-Api-Request']){
    			notify.alert(response.data);
    		}
    		return $q.reject(response);

    	})

    }

  }]);
