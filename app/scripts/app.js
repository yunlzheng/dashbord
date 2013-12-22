'use strict';

angular.module('dashbordApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'services.breadcrumbs',
  'ui.chart'
])
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        label: '主页'
      })
      .when('/instances', {
        templateUrl: 'views/instances.html',
        controller: 'InstancesCtrl',
        label: '实例'
      })
      .when('/volumes', {
        templateUrl: 'views/volumes.html',
        controller: 'VolumesCtrl',
        label: '存储卷'
      })
      .when('/networks', {
        templateUrl: 'views/networks.html',
        controller: 'NetworksCtrl',
        label: '网络'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl',
        label: '镜像'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        label: '设置'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        label: '帮助'
      })
      .otherwise({
        redirectTo: '/'
      });
});
