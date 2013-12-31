'use strict';

angular.module('dashbordApp')
  .controller('NodesCtrl', ['$scope', 'pools',
    function($scope, pools) {
        pools.getPlatformNodes().success(function(data){

        $scope.pools = data.data;

       });
    }
  ]);