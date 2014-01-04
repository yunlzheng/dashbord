'use strict';

function HomeCtrl($scope, $rootScope, pools, charting) {

  $scope.max = 200;
  $scope.dynamic = 100;

  $scope.pools = [];

  $scope.knobOptions = {
    'readOnly': true
  };

  $scope.getPools = function() {

    pools.getPlatformNodes().success(function(data) {

      $scope.pools = data.data;
      angular.forEach($scope.pools, function(pool) {

        pool.open = true;

        console.log('volume   '+ pool.quota.share_storage +'<-------->'+ pool.quota.used_share_storage);
         

        console.log('instance   '+ pool.quota.instances +'<-------->'+ pool.quota.used_instances);
          

        console.log('vcpus   '+ pool.quota.vcpus+'<-------->'+pool.quota.used_vcups);

        console.log('memory   '+ pool.quota.memory+'<-------->'+pool.quota.used_memory);

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