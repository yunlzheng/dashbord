'use strict';

angular.module('dashbordApp')
  .controller('MainCtrl', function ($scope, $route, $routeParams, $location) {

  	$scope.status = {
  		'showSideMenu': true
  	}

    $scope.toggleMenu = function(){

    	$scope.status.showSideMenu = !$scope.status.showSideMenu;
    
    }
    
  });
