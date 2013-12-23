'use strict';

function InstancesCtrl ($scope, $cookieStore, $http) {

    $scope.rootUrl = $cookieStore.get('rootUrl');
    $scope.appKey = $cookieStore.get('appKey');
    $scope.appSecret = $cookieStore.get('appSecret');
    $scope.accessToken = $cookieStore.get('accessToken');

    $http.get($scope.rootUrl + '/v1/vms').success(function (data) {

      $scope.vms = data;

    }).error(function () {

      $scope.vms = {
        'data': [{
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, {
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, {
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, {
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, {
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, {
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, {
          'name': 'instance-001',
          'size': 2,
          'status': 'active',
          'created': '1990-12-31',
          'OS-EXT-SRV-ATTR:host': 'cc01.huacloud.demo',
          'OS-EXT-STS:power_state': 1
        }, ]
      };

    });

  }

InstancesCtrl.$inject = ['$scope', '$cookieStore', '$http'];

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', '$cookieStore', '$http', InstancesCtrl]);