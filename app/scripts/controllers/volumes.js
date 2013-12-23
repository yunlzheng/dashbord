'use strict';

angular.module('dashbordApp')
    .controller('VolumesCtrl', function ($scope, $cookieStore, $http) {

        $scope.rootUrl = $cookieStore.get('rootUrl');
        $scope.appKey = $cookieStore.get('appKey');
        $scope.appSecret = $cookieStore.get('appSecret');
        $scope.accessToken = $cookieStore.get('accessToken');

        $scope.createVolume = function(newVolume){
            $http({method: 'POST', url: $scope.rootUrl + '/v1/volume', data: newVolume});
        };

        $scope.getVolumes = function(){

            $http.get($scope.rootUrl + '/v1/volumes').success(
            function (data) {

                $scope.volumes = data;

            }).error(function () {

                //build test data
                $scope.volumes = {
                    'data': [{
                        'display_name': 'dev_volume_001',
                        'size': 1,
                        'status': 'active',
                        'created_at': '1990-12-31',
                        'availability_zone': 'nova'
                    }, {
                        'display_name': 'dev_volume_002',
                        'size': 1,
                        'status': 'active',
                        'created_at': '1990-12-31',
                        'availability_zone': 'nova'
                    }, {
                        'display_name': 'dev_volume_003',
                        'size': 1,
                        'status': 'active',
                        'created_at': '1990-12-31',
                        'availability_zone': 'nova'
                    }, {
                        'display_name': 'dev_volume_004',
                        'size': 1,
                        'status': 'active',
                        'created_at': '1990-12-31',
                        'availability_zone': 'nova'
                    }, {
                        'display_name': 'dev_volume_005',
                        'size': 1,
                        'status': 'active',
                        'created_at': '1990-12-31',
                        'availability_zone': 'nova'
                    }]
                };

            });

        }

        $scope.getVolumes();

    });