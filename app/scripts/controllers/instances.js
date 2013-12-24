'use strict';

function InstancesCtrl($scope, instances, $modal) {

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

    instances.query().success(function (data) {

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

InstancesCtrl.$inject = ['$scope', 'instances', '$modal'];

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', 'instances', '$modal', InstancesCtrl]);