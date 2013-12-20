'use strict';

angular.module('dashbordApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'services.breadcrumbs',
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
        label: 'home'
      })
      .when('/instances', {
        templateUrl: 'views/instances.html',
        controller: 'InstancesCtrl',
        label: 'instances'
      })
      .when('/volumes', {
        templateUrl: 'views/volumes.html',
        controller: 'VolumesCtrl',
        label: 'volumes'
      })
      .when('/networks', {
        templateUrl: 'views/networks.html',
        controller: 'NetworksCtrl',
        label: 'networks'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl',
        label: 'images'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        label: 'settings'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl',
        label: 'help'
      })
      .otherwise({
        redirectTo: '/'
      });
});
