'use strict';

function RouteCtrl($scope){
	console.log($scope);
}

RouteCtrl.$inject = ['$scope'];

angular.module('dashbordApp')
  .controller('RouteCtrl', ['$scope', RouteCtrl]);
