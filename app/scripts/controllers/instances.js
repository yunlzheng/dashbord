'use strict';

angular.module('dashbordApp')
  .controller('InstancesCtrl', function ($scope, $cookieStore, $http) {

    $scope.rootUrl = $cookieStore.get('rootUrl');
  	$scope.appKey = $cookieStore.get('appKey');
  	$scope.appSecret = $cookieStore.get('appSecret');
    $scope.accessToken = $cookieStore.get('accessToken')

    $http.get($scope.rootUrl+'/v1/vms').success(function(data){

    	console.log(data);
    	$scope.vms = data;

    });

  });
