'use strict';

angular.module('dashbordApp')
  .controller('NodesCtrl', ['$scope', 'pools','$cookieStore',
    function($scope, pools, $cookieStore) {

      $scope.currentPage = 1;
      $scope.maxSize = 6;
      $scope.numPerPage = 6;
      $scope.totalItems = function(){

        return $scope.nodes.length;

      };

      $scope.$watch('currentPage + totalItems + nodes', function(){

        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
        var end = begin + $scope.numPerPage;
        $scope.modelFilteredNodes= $scope.nodes.slice(begin, end);

      });

      $scope.getNodes = function(){

        $scope.nodes = [];
        var platform_id = $cookieStore.get('platform_id');
        pools.getPlatformNodes(platform_id).success(function(data){

            angular.forEach(data.data, function(item){

              pools.getPoolNodes(item.id).success(function(result){

                $scope.nodes = $scope.nodes.concat(result.data.nodes);

              });

            });

         });

      };

      $scope.getNodes();
      
    }
  ]);