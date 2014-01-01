'use strict';

function HomeCtrl($scope, $rootScope, pools, charting) {



  $scope.pools = [];

  $scope.getPools = function() {

    pools.getPlatformNodes().success(function(data) {

      $scope.pools = data.data;
      angular.forEach($scope.pools, function(pool) {

        pool.open = true;

        pool.volumeQuota =[
          [
            ['已使用', pool.quota.used_share_storage],
            ['剩余', pool.quota.share_storage-pool.quota.used_share_storage]
          ]
        ];

        pool.instanceQuota = [
          [
            ['已使用', pool.quota.used_instances],
            ['剩余', pool.quota.instances-pool.quota.used_instances]
          ]
        ];

        pool.vcpuQuota = [
          [
            ['已使用', pool.quota.used_vcups],
            ['剩余', pool.quota.vcpus-pool.quota.used_vcups]
          ]
        ];

        pool.memoryQuota = [
          [
            ['已使用', pool.quota.used_memory],
            ['剩余', pool.quota.memory-pool.quota.used_memory]
          ]
        ];

      });

      console.log($scope.pools);

    });

  };

  $scope.getPools();

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
          showDataLabels: true,
          dataLabels: 'label'
        }
      },
      legend: {
        show: false,
        location: 's'
      },
      grid: {
        background: 'rgba(0,0,0,0)',
        gridLineColor: '#222',
        borderColor: 'rgba(0,0,0,0)',
        shadow: false
      }
    }
  })
  .controller('HomeCtrl', ['$scope', '$rootScope', 'pools', 'charting', HomeCtrl]);