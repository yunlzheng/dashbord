'use strict';

angular.module('dashbordApp')
  .controller('SettingsCtrl', function ($scope, $cookieStore, $http) {

  	$scope.rootUrl = $cookieStore.get('rootUrl');
  	$scope.appKey = $cookieStore.get('appKey');
  	$scope.appSecret = $cookieStore.get('appSecret');
    $scope.accessToken = $cookieStore.get('accessToken')

  	$scope.saveSettings = function(){

      var default_token = "36473c01136040699de17f6de3f153d3";

  		$cookieStore.put('rootUrl', $scope.rootUrl);
  		$cookieStore.put('appKey', $scope.appKey);
  		$cookieStore.put('appSecret', $scope.appSecret);
      $cookieStore.put('accessToken', default_token)

      //  headers: {
      //    "X-Consumer-key":$scope.appKey,
      //    "X-Consumer-Secret":$scope.appSecret
      //  }
      $http.get($scope.rootUrl+'/auth/token?grant_type=authorization_code');

  	}

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
