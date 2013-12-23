'use strict';

function SettingsCtrl($scope, $cookieStore, $http) {

  $scope.rootUrl = $cookieStore.get('rootUrl');
  $scope.appKey = $cookieStore.get('appKey');
  $scope.appSecret = $cookieStore.get('appSecret');
  $scope.accessToken = $cookieStore.get('accessToken');

  $scope.saveSettings = function () {

    var defaultToken = '60c79b921dbe4a5b8f051a8b7f1668f7';

    $cookieStore.put('rootUrl', $scope.rootUrl);
    $cookieStore.put('appKey', $scope.appKey);
    $cookieStore.put('appSecret', $scope.appSecret);
    $cookieStore.put('accessToken', defaultToken);

    $http.get($scope.rootUrl + '/auth/token?grant_type=authorization_code');

  };

}

SettingsCtrl.$inject = ['$scope', '$cookieStore', '$http'];

angular.module('dashbordApp')
  .controller('SettingsCtrl', ['$scope', '$cookieStore', '$http', SettingsCtrl]);