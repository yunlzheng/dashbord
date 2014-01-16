'use strict';

function MigrateInstanceModalCtrl($scope, $modalInstance) {

  $scope.ok = function(targetHost) {
    $modalInstance.close(targetHost);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

}

MigrateInstanceModalCtrl.$inject = ['$scope', '$modalInstance'];

function NewInstanceModalCtrl($scope, $modalInstance, cacheImages, cacheFlavors, cachePorts) {

  $scope.newInstance = {};
  $scope.modelFilteredPorts = [];

  $scope.images = cacheImages;
  $scope.flavors = cacheFlavors;

  var activePorts = [];

  angular.forEach(cachePorts, function(port) {

    if (port.status === 'ACTIVE') {
      this.push(port);
    }

  }, activePorts);

  $scope.ports = activePorts;

  $scope.imagePager = {
    currentPage: 1,
    perPage: 5,
    totalItems: function() {
      return $scope.images.length;
    }
  };

  $scope.portPager = {
    currentPage: 1,
    perPage: 5,
    totalItems: function() {
      return $scope.ports.length;
    }
  };

  $scope.flavorPager = {
    currentPage: 1,
    perPage: 5,
    totalItems: function() {
      return $scope.flavors.length;
    }
  };


  $scope.$watch('imagePager', function() {

    var begin = (($scope.imagePager.currentPage - 1) * $scope.imagePager.perPage);
    var end = begin + $scope.imagePager.perPage;
    $scope.modelFilteredImage = $scope.images.slice(begin, end);

  }, true);

  $scope.$watch('portPager', function() {

    var begin = (($scope.portPager.currentPage - 1) * $scope.portPager.perPage);
    var end = begin + $scope.portPager.perPage;
    $scope.modelFilteredPorts = $scope.ports.slice(begin, end);

  }, true);

  $scope.$watch('flavorPager', function() {

    var begin = (($scope.flavorPager.currentPage - 1) * $scope.flavorPager.perPage);
    var end = begin + $scope.flavorPager.perPage;
    $scope.modelFilteredFlavor = $scope.flavors.slice(begin, end);

  }, true);

  $scope.ok = function(newInstance) {
    $modalInstance.close(newInstance);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };

}

NewInstanceModalCtrl.$inject = ['$scope', '$modalInstance', 'cacheImages', 'cacheFlavors', 'cachePorts'];

function InstancesCtrl($scope, $filter, instances, images, flavors, ports, $interval, $modal) {

  /**page*/
  $scope.originVms = [];
  $scope.vms = [];
  $scope.filteredVms = [];
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.numPerPage = 10;

  $scope.loading = false;

  var InstanceStatus = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    SHUTOFF: 'SHUTOFF'
  };

  $scope.bigTotalItems = function() {
    return $scope.vms.length;
  };

  $scope.$watch('vms + currentPage + numPerPage', function() {

    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;
    $scope.filteredVms = $scope.vms.slice(begin, end);

  });

  $scope.search = function(){

    $scope.originVms = $scope.vms;
    if(!angular.isUndefined($scope.searchText)){

      $scope.vms = $filter('filter')($scope.vms, $scope.searchText);
      
    }else{

      $scope.vms = $scope.originVms;

    }

  };

  $scope.selectedInstance = {};

  $scope.isNotSelectInstance = function() {

    return $scope.count <= 0;

  };

  $scope.isNotSelectOne = function() {

    return $scope.count !== 1;

  };

  $scope.isNotSelect = function() {

    return $scope.count === 0;

  };

  $scope.$watch('filteredVms', function() {

    var count = 0;
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        $scope.selectedInstance = vm;
        count++;
      }

    }
    $scope.count = count;

  }, true);


  $scope.isActive = function() {

    return ($scope.selectedInstance.status === InstanceStatus.ACTIVE);

  };

  $scope.isPaused = function() {

    return ($scope.selectedInstance.status === InstanceStatus.PAUSED);


  };

  $scope.isShutoff = function() {
    return ($scope.selectedInstance.status === InstanceStatus.SHUTOFF);
  };

  $scope.openNewInstanceModal = function() {

    var modalInstance = $modal.open({
      templateUrl: 'views/newInstanceModal.html',
      controller: NewInstanceModalCtrl,
      resolve: {
        cacheImages: function() {
          return $scope.images ? $scope.images : [];
        },
        cacheFlavors: function() {
          return $scope.flavors ? $scope.flavors : [];
        },
        cachePorts: function() {
          return $scope.ports ? $scope.ports : [];
        }

      }
    });

    modalInstance.result.then(function(newInstance) {

      $scope.newInstance = newInstance;
      newInstance = {

        'name': newInstance.name,
        'flavor': newInstance.flavor.id,
        'image': newInstance.image.id,
        'nics': [{
          'port_id': newInstance.port.id
        }]

      };

      instances.save(newInstance).success(function(data) {

        if (data.code === '0') {
          $scope.getInstances();
        }

      });

    });

  };

  $scope.openMigrateVmModal = function() {

    var modalInstance = $modal.open({

      templateUrl: 'migrateInstanceModal.html',
      controller: MigrateInstanceModalCtrl,
      resolve: {}

    });

    modalInstance.result.then(function(targetHost) {

      console.log(targetHost);
      $scope.migrate(targetHost);

    });

  };

  /**
  获取所有虚拟机实例
  */
  $scope.getInstances = function() {

    $scope.loading = true;
    instances.query().success(function(data) {

      if (data.code === '0') {
        $scope.vms = data.data;
        $scope.search();
      }
      $scope.loading = false;

    }).error(function() {

      //$scope.vms = mockInstances.query();
      $scope.loading = false;

    });

  };

  /**移除虚拟机*/
  $scope.remove = function() {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.remove(vm.id);
      }

    }

    $scope.getInstances();

  };

  /**启动虚拟机*/
  $scope.start = function() {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.start(vm.id);
      }

    }

    $scope.getInstances();

  };

  /**停止虚拟机*/
  $scope.stop = function() {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.stop(vm.id);
      }

    }

    $scope.getInstances();

  };


  /**从暂停状态恢复虚拟机*/
  $scope.unpause = function() {
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.unpause(vm.id);
      }

    }

    $scope.getInstances();

  };

  /***
  暂停虚拟机
  */
  $scope.pause = function() {
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.pause(vm.id);
      }
    }

    $scope.getInstances();

  };

  /**
  迁移虚拟机到特定目标计算节点
  */
  $scope.migrate = function(targetHost) {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.migrate(vm.id, targetHost);
      }

    }
    $scope.getInstances();

  };

  $scope.reboot = function() {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected === true) {
        instances.reboot(vm.id);
      }

    }
    $scope.getInstances();

  };

  $scope.getVnc = function() {

    angular.forEach($scope.filteredVms, function(vm){

        if (vm.selected === true) {
            instances.getVnc(vm.id).success(function(data) {

              if (data.code === '0') {
                window.open(data.data.console.url, vm.name + ' Console', 'width=1000,height=600');
              }

            });
        }

    });

  };

  $scope.getImages = function() {

    images.query().success(function(data) {

      if (data.code === '0') {
        $scope.images = data.data;
      }

    });

  };

  $scope.getFlavor = function() {

    flavors.query().success(function(data) {

      if (data.code === '0') {
        $scope.flavors = data.data;
      }

    });

  };

  $scope.getPorts = function() {

    ports.query().success(function(data) {

      $scope.ports = data.data;

    });

  };

  var timer;

  $scope.startSync = function() {

    $scope.getPorts();
    $scope.getInstances();
    $scope.getImages();
    $scope.getFlavor();

    if (!angular.isDefined(timer)) {

      timer = $interval(function() {

        $scope.getPorts();
        $scope.getInstances();
        $scope.getImages();
        $scope.getFlavor();

      }, 8000);

    }

  };

  $scope.stopSync = function() {

    if (angular.isDefined(timer)) {
      $interval.cancel(timer);
      timer = undefined;
    }

  };

  $scope.$on('$destroy', function() {
    $scope.stopSync();
  });

  $scope.startSync();

}

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', '$filter','instances', 'images', 'flavors', 'ports', '$interval', '$modal', InstancesCtrl]);