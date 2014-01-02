'use strict';

function NewRouteModalCtrl($scope, $modalInstance) {

  $scope.ok = function (newRoute) {
    $modalInstance.close(newRoute);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}

NewRouteModalCtrl.$inject = ['$scope', '$modalInstance'];

function RouteCtrl($scope, virtualRoutes, $modal){
    
    $scope.routes = [];

    $scope.routePager = {
      totalItems: function(){
        return $scope.routes.length;
      },
      currentPage: 1,
      maxSize: 6,
      perPage: 10,
      routes: []
    };

    $scope.$watch('routePager', function() {

      var begin = (($scope.routePager.currentPage - 1) * $scope.routePager.perPage);
      var end = begin + $scope.routePager.perPage;
      console.log($scope.routes);
      $scope.routePager.routes = $scope.routes.slice(begin, end);

    }, true);

    $scope.openCreateModal = function() {

      var modalInstance = $modal.open({
        templateUrl: '/template/modal/createRouteModal.html',
        controller: NewRouteModalCtrl,
        resolve: {}
      });

      modalInstance.result.then(function (newRoute) {

        $scope.newRoute = newRoute;
        $scope.create(newRoute);

      });

    };

    $scope.getRoutes = function() {
      virtualRoutes.routes().success(function(data){

        console.log(data);
        $scope.routes = data.data;

      });
    };

    $scope.create = function(route) {

      virtualRoutes.create(route).success(function(data){

        console.log(data);

      });

    };

    $scope.getRoutes();

}

angular.module('dashbordApp')
  .controller('RouteCtrl', ['$scope', 'virtualRoutes', '$modal', RouteCtrl]);
