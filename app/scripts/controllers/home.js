'use strict';

function HomeCtrl($scope, $rootScope, $cookieStore, pools) {

  $scope.max = 200;
  $scope.dynamic = 100;

  $scope.pools = [];

  $scope.knobOptions = {
    'readOnly': true
  };

  $scope.getPools = function() {

    var platform_id = $cookieStore.get('platform_id');

    pools.getPlatformNodes(platform_id).success(function(data) {

      $scope.pools = data.data;
      angular.forEach($scope.pools, function(pool) {

        pool.open = true;

      });

      console.log($scope.pools);

    });

  };

  $scope.getPools();

}


angular.module('dashbordApp')
  .controller('HomeCtrl', ['$scope', '$rootScope', '$cookieStore', 'pools', HomeCtrl]);