'use strict';

function InstancesCtrl($scope, instances, images, flavors, mockInstances, mockImages, mockFlavors, mockPorts, $modal) {

  /**page*/
  $scope.vms = [];
  $scope.filteredVms = [];
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.numPerPage = 6;

  $scope.bigTotalItems = function () {
    return $scope.vms.length;
  }

  $scope.$watch('currentPage + numPerPage + vms', function () {

    var begin = (($scope.currentPage - 1) * $scope.numPerPage),
      end = begin + $scope.numPerPage;
    $scope.filteredVms = $scope.vms.slice(begin, end);

  });

  $scope.selected = {};

  $scope.isNotSelectInstance = function () {

    return CountSelect() <= 0;

  };

  $scope.isNotSelectOne = function () {

    return CountSelect() != 1;

  }

  $scope.isNotSelect = function () {

    return CountSelect() == 0;

  }

  function CountSelect() {
    var count = 0;
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        count++;
      }

    }
    return count;
  }

  $scope.remove = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.remove(vm.id);
      }

    }

    $scope.getInstances();

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
          'net_id': newInstance.port.id
        }]

      }

      instances.save(newInstance).success(function (data) {

        if (data.code === '0') {
          $scope.getInstances();
        }

      });;

    });

  };

  $scope.getInstances = function () {

    instances.query().success(function (data) {

      if (data.code === '0') {
        $scope.vms = data.data;
      }

    }).error(function () {

      $scope.vms = mockInstances.query();

    });

  };

  $scope.start = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.start(vm.id);
      }

    }

    $scope.getInstances();


  };

  $scope.stop = function () {

    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.stop(vm.id);
      }

    }

    $scope.getInstances();
  
  };

  $scope.unpause = function () {
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.unpause(vm.id);
      }

    }

    $scope.getInstances();
  
  };

  $scope.pause = function () {
    for (var i = 0; i < $scope.filteredVms.length; i++) {
      var vm = $scope.filteredVms[i];
      if (vm.selected == true) {
        instances.pause(vm.id);
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
        instances.getVnc(vm.id).success(function(data){

          console.log(data);

        });
      }

    }
    
  }

  $scope.getImages = function () {

    images.query().success(function (data) {

      if (data.code === '0') {
        $scope.images = data.data;
      }

    }).error(function () {

      $scope.images = mockImages.query();

    });

  }

  $scope.getFlavor = function () {

    flavors.query().success(function (data) {

      if (data.code === '0') {
        $scope.flavors = data.data;
      }

    }).error(function () {

      $scope.flavors = mockFlavors.query();

    });

  }

  $scope.getPorts = function () {

    $scope.ports = mockPorts.query();

  }

  $scope.getPorts();
  $scope.getInstances();
  $scope.getImages();
  $scope.getFlavor();

}

function NewInstanceModalCtrl($scope, $modalInstance, cache_images, cache_flavors, cache_ports) {

  $scope.newInstance = {};
  $scope.modelFilteredNetworks = [];
  $scope.images = cache_images;
  $scope.flavors = cache_flavors;
  $scope.ports = cache_ports;

  console.log(cache_ports);

  /**Network page*/
  $scope.modelPortCurrentPage = 1;
  $scope.modelPortPerPage = 5;
  $scope.modelTotalNetworks = function () {
    return $scope.ports.length;
  }

  $scope.$watch('modelPortCurrentPage + modelPortPerPage + modelTotalNetworks+networks', function () {


    var begin = (($scope.modelPortCurrentPage - 1) * $scope.modelPortPerPage)
    var end = begin + $scope.modelPortPerPage;
    $scope.modelFilteredPorts = $scope.ports.slice(begin, end);
    console.log(begin + "--" + end);

  });

  $scope.ok = function (newInstance) {
    $modalInstance.close(newInstance);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

};

NewInstanceModalCtrl.$inject = ['$scope', '$modalInstance', 'cache_images', 'cache_flavors', 'cache_ports'];

angular.module('dashbordApp')
  .controller('InstancesCtrl', ['$scope', 'instances', 'images', 'flavors', 'mockInstances', 'mockImages', 'mockFlavors', 'mockPorts', '$modal', InstancesCtrl]);