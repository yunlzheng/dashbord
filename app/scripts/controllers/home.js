'use strict';

function HomeCtrl($scope, $rootScope, $cookieStore, pools, charting) {

  $scope.max = 200;
  $scope.dynamic = 100;

  $scope.pools = [];

  $scope.knobOptions = {
    'readOnly': true
  };

  $scope.getPools = function() {

    var platform_id = $cookieStore.get('platform_id')

    pools.getPlatformNodes(platform_id).success(function(data) {

      $scope.pools = data.data;
      angular.forEach($scope.pools, function(pool) {

        pool.open = true;

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
  .controller('HomeCtrl', ['$scope', '$rootScope', '$cookieStore', 'pools', 'charting', HomeCtrl]);