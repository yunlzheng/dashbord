'use strict';

function httpProvider($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.responseInterceptors.push('Respinterceptor');
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

function routeProvider($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl',
      label: '主页'
    })
    .when("/nodes", {
      templateUrl: 'views/nodes.html',
      controller: 'NodesCtrl',
      label: '计算节点'
    })
    .when('/instances', {
      templateUrl: 'views/instances.html',
      controller: 'InstancesCtrl',
      label: '实例'
    })
    .when('/instances/:id', {
      templateUrl: 'views/instance.html',
      controller: 'InstanceCtrl',
      label: 'vm'
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
      label:'路由'
    })
    .when('/security-groups', {
      templateUrl: 'views/security-groups.html',
      controller: 'SecurityGroupsCtrl',
      label: '安全组'
    })
    .when('/images', {
      templateUrl: 'views/images.html',
      controller: 'ImagesCtrl',
      label: '镜像'
    })
    .when('/flavors', {
      templateUrl: 'views/flavors.html',
      controller: 'FlavorCtrl',
      label: '规格'
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

angular.module('dashbordApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'services.breadcrumbs',
  'services.resources',
  'services.mocks',
  'ui.chart',
  'ui.bootstrap.modal',
  'ui.bootstrap.buttons',
  'ui.bootstrap.pagination',
  'ui.bootstrap.alert'
])
  .config(['$httpProvider', httpProvider])
  .config(['$routeProvider', routeProvider]);