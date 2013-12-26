'use strict';

angular.module('dashbordApp')
  .controller('InstanceCtrl', ['$scope', '$routeParams', 'instances', 'mockInstances', function ($scope, $routeParams, instances, mockInstances) {
   
  	instances.get($routeParams.id).success(function(data){

  		$scope.vm = data.data;

  	}).error(function(){

  		$scope.vm = mockInstances.get();
  	
  	});

  	instances.getSnapshots($routeParams.id).success(function(data){

  		$scope.snapshots = data.data;

  	});

  }]);
