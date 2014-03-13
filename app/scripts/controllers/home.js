'use strict';

function HomeCtrl($scope, $cookieStore, $interval, pools) {

    $scope.max = 200;
    $scope.dynamic = 100;

    $scope.pools = [];

    $scope.knobOptions = {
        'readOnly': true
    };

    $scope.getPools = function () {

        var platform_id = $cookieStore.get('platform');
        pools.getPlatformNodes(platform_id).success(function (data) {
            $scope.pools = data.data;
            angular.forEach($scope.pools, function (pool) {
                pool.open = true;
            });
        });
    };

    $scope.getPools();

}

angular.module('dashbordApp')
    .controller('HomeCtrl', ['$scope', '$cookieStore', '$interval', 'pools', HomeCtrl]);