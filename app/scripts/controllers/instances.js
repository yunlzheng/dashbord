'use strict';

function InstancesCtrl($scope, instances, $modal) {

  $scope.vms = [];
  $scope.filteredVms = [];
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.numPerPage = 6;

  $scope.bigTotalItems = function () {
    return $scope.vms.length;
  }

  $scope.$watch('currentPage + numPerPage + vms', function () {

    var begin = (($scope.currentPage - 1) * $scope.numPerPage),end = begin + $scope.numPerPage;
    $scope.filteredVms = $scope.vms.slice(begin, end);

  });


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

      if (data.code === '0') {
        $scope.vms = data.data;
      }

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