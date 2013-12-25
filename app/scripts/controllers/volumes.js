'use strict';

function VolumesCtrl($scope, volumes, $modal) {

    $scope.volumes = [];
    $scope.filteredVolumes = [];
    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.numPerPage = 6;

    $scope.bigTotalItems = function () {
        return $scope.volumes.length;
    }

    $scope.$watch('currentPage + numPerPage + volumes', function () {

        var begin = (($scope.currentPage - 1) * $scope.numPerPage),
            end = begin + $scope.numPerPage;
        $scope.filteredVolumes = $scope.volumes.slice(begin, end);

    });

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
                if (data.code === '0') {
                    $scope.volumes = data.data;
                }


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