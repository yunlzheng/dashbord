'use strict';

function VolumesCtrl($scope, $cookieStore, $http, $modal) {

    $scope.rootUrl = $cookieStore.get('rootUrl');
    $scope.useNode = $cookieStore.get('useNode');

    var httpConfig = {
        'headers': {
            'X-Consumer-key': $cookieStore.get('appKey'),
            'X-Auth-Token': $cookieStore.get('accessToken')
        }
    };

    $scope.openCreateModal = function () {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            resolve: {}
        });

        modalInstance.result.then(function (newVolume) {

            $scope.newVolume = newVolume;
            $scope.createVolume(newVolume);

        });

    };

    $scope.createVolume = function (newVolume) {

        var url = '/v1/volume';

        if (!$scope.useNode) {
            url = $scope.rootUrl + url;
        }

        $http.post(url, newVolume, httpConfig).success(function () {

            $scope.getVolumes();

        });

    };

    $scope.getVolumes = function () {

        var url = '/v1/volumes';
        if (!$scope.useNode) {
            url = $scope.rootUrl + url;
        }

        $http.get(url, httpConfig).success(
            function (data) {

                $scope.volumes = data;

            });

    }

    $scope.getVolumes();

}

VolumesCtrl.$inject = ['$scope', '$cookieStore', '$http', '$modal'];

function ModalInstanceCtrl($scope, $modalInstance) {

    $scope.ok = function (newVolume) {
        $modalInstance.close(newVolume);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

};

ModalInstanceCtrl.$inject = ['$scope', '$modalInstance'];

angular.module('dashbordApp')
    .controller('VolumesCtrl', ['$scope', '$cookieStore', '$http', '$modal', VolumesCtrl]);