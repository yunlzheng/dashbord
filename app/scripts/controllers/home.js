'use strict';

function HomeCtrl($scope, $rootScope, charting) {
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
  .controller('HomeCtrl', ['$scope', '$rootScope', 'charting', HomeCtrl]);