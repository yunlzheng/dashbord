'use strict';

function httpProvider($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

httpProvider.$inject = ['$httpProvider'];

function routeProvider($routeProvider) {
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
    .when('/routes', {
      templateUrl: 'views/routes.html',
      controller:'RouteCtrl',
      label:'routes'
    })
    .when('/images', {
      templateUrl: 'views/images.html',
      controller: 'ImagesCtrl',
      label: '镜像'
    })
    .when('/flavors', {
      templateUrl: 'views/flavors.html',
      controller: 'FlavorCtrl',
      label: 'Flavors'
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
}

routeProvider.$inject = ['$routeProvider'];

angular.module('dashbordApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'services.breadcrumbs',
  'services.resources',
  'ui.chart',
  'ui.bootstrap.modal',
])
  .config(['$httpProvider', httpProvider])
  .config(['$routeProvider', routeProvider]);