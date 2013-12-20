'use strict';

angular.module('dashbordApp')
  .controller('VolumesCtrl', function ($scope, $cookieStore, $http) {
    
    $scope.rootUrl = $cookieStore.get('rootUrl');
  	$scope.appKey = $cookieStore.get('appKey');
  	$scope.appSecret = $cookieStore.get('appSecret');
    $scope.accessToken = $cookieStore.get('accessToken')

    $http.get($scope.rootUrl+'/v1/volumes').success(function(data){

    	$scope.volumes = data;

    });

  });
