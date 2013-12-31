'use strict';

function HomeCtrl($scope, $rootScope, pools, charting) {

  $scope.pools = [];

  $scope.getPools = function() {

    pools.getPlatformNodes().success(function(data) {

      $scope.pools = data.data;
      angular.forEach($scope.pools, function(pool) {

        pool.volumeQuota =[
          [
            ['Used', pool.quota.used_share_storage],
            ['Unused', pool.quota.share_storage-pool.quota.used_share_storage]
          ]
        ];

        pool.instanceQuota = [
          [
            ['Used', pool.quota.used_instances],
            ['Unused', pool.quota.instances-pool.quota.used_instances]
          ]
        ];

        pool.vcpuQuota = [
          [
            ['Used', pool.quota.used_vcups],
            ['Unused', pool.quota.vcpus-pool.quota.used_vcups]
          ]
        ];

        pool.memoryQuota = [
          [
            ['Used', pool.quota.used_memory],
            ['Unused', pool.quota.memory-pool.quota.used_memory]
          ]
        ];

      });

      console.log($scope.pools);

    });

  };

  $scope.getPools();


  $scope.instanceQuota = [
    [
      ['Used', 12],
      ['Unused', 9]
    ]
  ];

  $scope.volumeQuota = [
    [
      ['Used', 90],
      ['Unused', 80]
    ]
  ];

  $scope.myChartOpts = charting.pieChartOptions;
}


angular.module('dashbordApp')
  .value('charting', {
    pieChartOptions: {
      seriesDefaults: {
        // Make this a pie chart.
        renderer: jQuery.jqplot.DonutRenderer,
        rendererOptions: {
          // Put data labels on the pie slices.
          // By default, labels show the percentage of the slice.
          showDataLabels: true
        }
      },
      legend: {
        show: false,
        location: 's'
      },
      grid: {
        background: '#fff',
        gridLineColor: '#222',
        borderColor: '#fff',
        shadow: false
      }
    }
  })
  .controller('HomeCtrl', ['$scope', '$rootScope', 'pools', 'charting', HomeCtrl]);