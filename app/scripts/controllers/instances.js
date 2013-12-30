'use strict';

function InstancesCtrl($scope, instances, images, flavors, ports, $interval, $modal, mockInstances) {

  /**page*/
  $scope.vms = [];
  $scope.filteredVms = [];
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.numPerPage = 6;

  var InstanceStatus = {
    ACTIVE: 'ACTIVE',
    PAUSED: 'PAUSED',
    SHUTOFF: 'SHUTOFF'
  };

  $scope.bigTotalItems = function () {
    return $scope.vms.length;
  }

  $scope.$watch('vms + currentPage + numPerPage', function () {

    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;
    $scope.filteredVms = $scope.vms.slice(begin, end);

  });

  $scope.selectedInstance = {};

  $scope.isNotSelectInstance = function () {

    return CountSelect() <= 0;

  };

  $scope.isNotSelectOne = function () {

    return CountSelect() != 1;

  };

  $scope.isNotSelect = function () {

    return CountSelect() == 0;

  };

  $scope.isActive = function () {

    var status = ($scope.selectedInstance.status == InstanceStatus.ACTIVE);
    return status

  };

  $scope.isPaused = function () {

    var status = ($scope.selectedInstance.status == InstanceStatus.PAUSED);
    return status

  };

  $scope.isShutoff = function () {
    var status = ($scope.selectedInstance.status == InstanceStatus.SHUTOFF);
    return status
  };

  function CountSelect() {
    var count = 0;
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        $scope.selectedInstance = vm;
        count++;
      }

    }
    return count;
  }

  $scope.openNewInstanceModal = function () {

    var modalInstance = $modal.open({
      templateUrl: 'newInstanceModal.html',
      controller: NewInstanceModalCtrl,
      resolve: {
        cache_images: function () {
          return $scope.images ? $scope.images : [];
        },
        cache_flavors: function () {
          return $scope.flavors ? $scope.flavors : [];
        },
        cache_ports: function () {
          return $scope.ports ? $scope.ports : [];
        }

      }
    });

    modalInstance.result.then(function (newInstance) {

      $scope.newInstance = newInstance;
      newInstance = {

        'name': newInstance.name,
        'flavor': newInstance.flavor.id,
        'image': newInstance.image.id,
        'nics': [{
          'port_id': newInstance.port.id
        }]

      }

      instances.save(newInstance).success(function (data) {

        if (data.code === '0') {
          $scope.getInstances();
        }

      });;

    });

  };

  $scope.openMigrateVmModal = function () {

    var modalInstance = $modal.open({

      templateUrl: 'migrateInstanceModal.html',
      controller: MigrateInstanceModalCtrl,
      resolve: {}

    });

    modalInstance.result.then(function (targetHost) {

      console.log(targetHost);
      $scope.migrate(targetHost);

    });

  };

  /**
  获取所有虚拟机实例
  */
  $scope.getInstances = function () {

    instances.query().success(function (data) {

      if (data.code === '0') {
        $scope.vms = data.data;
      }

    }).error(function(){

      $scope.vms = mockInstances.query();

    });

  };

  /**移除虚拟机*/
  $scope.remove = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.remove(vm.id);
      }

    }

    $scope.getInstances();

  }

  /**启动虚拟机*/
  $scope.start = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.start(vm.id);
      }

    }

    $scope.getInstances();

  };

  /**停止虚拟机*/
  $scope.stop = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.stop(vm.id);
      }

    }

    $scope.getInstances();

  };


  /**从暂停状态恢复虚拟机*/
  $scope.unpause = function () {
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.unpause(vm.id);
      }

    }

    $scope.getInstances();

  };

  /***
  暂停虚拟机
  */
  $scope.pause = function () {
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
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
      if (vm.selected == true) {
        instances.migrate(vm.id, targetHost);
      }

    }
    $scope.getInstances();

  };

  $scope.reboot = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.reboot(vm.id);
      }

    }
    $scope.getInstances();

  };

  $scope.getVnc = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.getVnc(vm.id).success(function (data) {

          if (data.code === '0') {
            window.open(data.data.console.url, vm.name + " Console", "width=1000,height=600");
          }

        });
      }

    }

  }

  $scope.getImages = function () {

    images.query().success(function (data) {

      if (data.code === '0') {
        $scope.images = data.data;
      }

    });

  }

  $scope.getFlavor = function () {

    flavors.query().success(function (data) {

      if (data.code === '0') {
        $scope.flavors = data.data;
      }

    });

  }

  $scope.getPorts = function () {

    ports.query().success(function (data) {

      $scope.ports = data.data;

    });

  }

  var timer;

  $scope.startSync = function () {

    $scope.getPorts();
    $scope.getInstances();
    $scope.getImages();
    $scope.getFlavor();

    if (!angular.isDefined(timer)) {

      timer = $interval(function () {

        $scope.getPorts();
        $scope.getInstances();
        $scope.getImages();
        $scope.getFlavor();

      }, 5000);

    }

  };

  $scope.stopSync = function () {

    if (angular.isDefined(timer)) {
      $interval.cancel(timer);
      timer = undefined;
    }

  }

  $scope.$on('$destroy', function () {
    $scope.stopSync();
  });

  $scope.startSync();

}

function NewInstanceModalCtrl($scope, $modalInstance, cache_images, cache_flavors, cache_ports) {

  $scope.newInstance = {};
  $scope.modelFilteredPorts = [];

  $scope.images = cache_images;
  $scope.flavors = cache_flavors;

  var activePorts = [];

  angular.forEach(cache_ports, function (port) {

    if (port.status === 'ACTIVE') {
      this.push(port);
    }

  }, activePorts);

  $scope.ports = activePorts;

  $scope.imagePager = {
    currentPage: 1,
    perPage: 5,
    totalItems: function () {
      return $scope.images.length;
    }
  };

  $scope.portPager = {
    currentPage: 1,
    perPage: 5,
    totalItems: function () {
      return $scope.ports.length;
    }
  };

  $scope.flavorPager = {
    currentPage: 1,
    perPage: 5,
    totalItems: function () {
      return $scope.flavors.length;
    }
  };


  $scope.$watch('imagePager', function () {

    var begin = (($scope.imagePager.currentPage - 1) * $scope.imagePager.perPage)
    var end = begin + $scope.imagePager.perPage;
    $scope.modelFilteredImage = $scope.images.slice(begin, end);

  }, true);
  
  $scope.$watch('portPager', function () {

    var begin = (($scope.portPager.currentPage - 1) * $scope.portPager.perPage)
    var end = begin + $scope.portPager.perPage;
    $scope.modelFilteredPorts = $scope.ports.slice(begin, end);

  }, true);

  $scope.$watch('flavorPager', function () {

    var begin = (($scope.flavorPager.currentPage - 1) * $scope.flavorPager.perPage)
    var end = begin + $scope.flavorPager.perPage;
    $scope.modelFilteredFlavor = $scope.flavors.slice(begin, end);

  }, true);

  $scope.ok = function (newInstance) {
    $modalInstance.close(newInstance);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

};

NewInstanceModalCtrl.$inject = ['$scope', '$modalInstance', 'cache_images', 'cache_flavors', 'cache_ports'];

function MigrateInstanceModalCtrl($scope, $modalInstance){

   $scope.ok = function (targetHost) {
    $modalInstance.close(targetHost);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

};

MigrateInstanceModalCtrl.$inject = ['$scope', '$modalInstance'];

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', 'instances', 'images', 'flavors', 'ports', '$interval', '$modal', 'mockInstances', InstancesCtrl]);