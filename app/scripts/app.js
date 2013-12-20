'use strict';

angular.module('dashbordApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/instances', {
        templateUrl: 'views/instances.html',
        controller: 'InstancesCtrl'
      })
      .when('/volumes', {
        templateUrl: 'views/volumes.html',
        controller: 'VolumesCtrl'
      })
      .when('/networks', {
        templateUrl: 'views/networks.html',
        controller: 'NetworksCtrl'
      })
      .when('/images', {
        templateUrl: 'views/images.html',
        controller: 'ImagesCtrl'
      })
      .when('/help', {
        templateUrl: 'views/help.html',
        controller: 'HelpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
