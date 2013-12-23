'use strict';

function InstancesCtrl($scope, $cookieStore, $http, $modal) {

  $scope.rootUrl = $cookieStore.get('rootUrl');
  $scope.useNode = $cookieStore.get('useNode');

  var httpConfig = {
    'headers': {
      'X-Consumer-key': $cookieStore.get('appKey'),
      'X-Auth-Token': $cookieStore.get('accessToken')
    }
  };

  $scope.openNewInstanceModal = function () {

    var modalInstance = $modal.open({
      templateUrl: 'newInstanceModal.html',
      controller: NewInstanceModalCtrl,
      resolve: {}
    });

    modalInstance.result.then(function (newInstance) {

      $scope.newInstance = newInstance;
      console.log(newInstance);

    });

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

function NewInstanceModalCtrl($scope, $modalInstance) {

  

  $scope.ok = function (newInstance) {
    $modalInstance.close(newInstance);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

};

NewInstanceModalCtrl.$inject = ['$scope', '$modalInstance'];

InstancesCtrl.$inject = ['$scope', '$cookieStore', '$http', '$modal'];

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', '$cookieStore', '$http', '$modal', InstancesCtrl]);