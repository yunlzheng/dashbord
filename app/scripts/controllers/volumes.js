'use strict';

function VolumesCtrl($scope, volumes, $modal) {

    $scope.openCreateModal = function () {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: NewVolumeModalCtrl,
            resolve: {}
        });

        modalInstance.result.then(function (newVolume) {

            $scope.newVolume = newVolume;
            $scope.createVolume(newVolume);

        });

    };

    $scope.createVolume = function (newVolume) {

        volumes.save(newVolume).success(function () {

            $scope.getVolumes();

        });

    };

    $scope.getVolumes = function () {

        volumes.query().success(
            function (data) {

                $scope.volumes = data;

            });

    }

    $scope.getVolumes();

}


function NewVolumeModalCtrl($scope, $modalInstance) {

    $scope.ok = function (newVolume) {
        $modalInstance.close(newVolume);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

};

NewVolumeModalCtrl.$inject = ['$scope', '$modalInstance'];

angular.module('dashbordApp')
    .controller('VolumesCtrl', ['$scope', 'volumes', '$modal', VolumesCtrl]);