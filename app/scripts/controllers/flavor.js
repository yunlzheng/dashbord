'use strict';

function FlavorCtrl($scope, flavors) {

	flavors.query().success(function(data){

		console.log(data);
		$scope.flavors = data;

	});

}

FlavorCtrl.$inject = ['$scope', 'flavors'];

angular.module('dashbordApp')
  .controller('FlavorCtrl', ['$scope', 'flavors', FlavorCtrl]);
