'use strict';

function InstancesCtrl($scope, $cookieStore, $http) {

  $scope.rootUrl = $cookieStore.get('rootUrl');
  $scope.useNode = $cookieStore.get('useNode');

  var httpConfig = {
    'headers': {
      'X-Consumer-key': $cookieStore.get('appKey'),
      'X-Auth-Token': $cookieStore.get('accessToken')
    }
  };

  $scope.getInstances = function () {

    var url = '/v1/vms';
    if (!$scope.useNode) {
      url = $scope.rootUrl + url;
    }

    $http.get(url, httpConfig).success(function (data) {

      $scope.vms = data;

    });

  };

  $scope.getInstances();

}

InstancesCtrl.$inject = ['$scope', '$cookieStore', '$http'];

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', '$cookieStore', '$http', InstancesCtrl]);