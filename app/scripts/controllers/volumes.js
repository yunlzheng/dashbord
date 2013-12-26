'use strict';

function VolumesCtrl($scope, volumes, mockVolumes, $modal, $timeout, $interval) {


    $scope.volumes = [];
    $scope.filteredVolumes = [];
    $scope.maxSize = 5;
    $scope.currentPage = 1;
    $scope.numPerPage = 6;

    $scope.selectedInstance = {};

    $scope.bigTotalItems = function () {
        return $scope.volumes.length;
    }

    $scope.$watch('currentPage + numPerPage + volumes', function () {

        var begin = (($scope.currentPage - 1) * $scope.numPerPage),
            end = begin + $scope.numPerPage;
        $scope.filteredVolumes = $scope.volumes.slice(begin, end);

    });

    $scope.isNotSelectAnyOne = function () {

        return (CountSelect() == 0);

    };

    $scope.isSelectOnlyOne = function () {
        return (CountSelect() == 1);
    };

    function CountSelect() {
        var count = 0;
        for (var i = 0; i < $scope.filteredVolumes.length; i++) {
            var volume = $scope.filteredVolumes[i];
            if (volume.selected == true) {
                $scope.selectedInstance = volume;
                count++;
            }
        }
        return count;
    }

    $scope.openCreateModal = function () {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: NewVolumeModalCtrl,
            resolve: {}
        });

        modalInstance.result.then(function (newVolume) {

            $scope.newVolume = newVolume;
            $scope.create(newVolume);

        });

    };

    $scope.create = function (newVolume) {

        volumes.save(newVolume).success(function () {

            $scope.getVolumes();

        });

    };

    $scope.remove = function () {

        for (var i = 0; i < $scope.filteredVolumes.length; i++) {
            var volume = $scope.filteredVolumes[i];
            if (volume.selected == true) {
                volumes.remove(volume.id).success(function () {
                    //TO DO;
                });
            }
        }

    };

    $scope.getVolumes = function () {

        volumes.query().success(
            function (data) {
                if (data.code === '0') {
                    $scope.volumes = data.data;
                }


            }).error(function () {

            $scope.volumes = mockVolumes.query();

        });
    }

    var timer;

    $scope.startSync = function () {

        $scope.getVolumes();

        if (!angular.isDefined(timer)) {
            //data sync
            timer = $interval(function () {

                $scope.getVolumes();

            }, 5000);
        }

    }

    $scope.stopSync = function () {

        if (angular.isDefined(timer)) {
            $interval.cancel(timer);
            timer = undefined;
        }

    };

    $scope.$on('$destroy', function () {
        $scope.stopSync();
    });

    $scope.startSync();

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
    .controller('VolumesCtrl', ['$scope', 'volumes', 'mockVolumes', '$modal', '$timeout', '$interval', VolumesCtrl]);