'use strict';

angular.module('dashbordApp')
    .controller('InstanceCtrl', ['$scope', '$routeParams', 'instances', 'flavors',
        function ($scope, $routeParams, instances, flavors) {

            instances.get($routeParams.id).success(function (data) {

                $scope.vm = data.data;

            });

//            instances.getSnapshots($routeParams.id).success(function (data) {
//
//                $scope.snapshots = data.data;
//
//            });

            $scope.getVnc = function () {

                instances.getVnc($scope.vm.id).success(function (data) {

                    if (data.code === '0') {
                        window.open(data.data.console.url, $scope.vm.name + ' Console', 'width=1000,height=600');
                    }

                });

            };

            $scope.remove = function () {
                instances.remove($scope.vm.id);
            };

            $scope.start = function () {
                instances.start($scope.vm.id);
            };

            $scope.stop = function () {
                instances.stop($scope.vm.id);
            };

            $scope.unpause = function () {
                instances.unpause($scope.vm.id);
            };

            $scope.pause = function () {
                instances.pause($scope.vm.id);
            };

            $scope.reboot = function () {

                instances.reboot($scope.vm.id);

            };

        }
    ]);