'use strict';

function NetworksCtrl($scope, $cookieStore, $http) {

	$scope.rootUrl = $cookieStore.get('rootUrl');
	$scope.useNode = $cookieStore.get('useNode');

	var httpConfig = {
		'headers': {
			'X-Consumer-key': $cookieStore.get('appKey'),
			'X-Auth-Token': $cookieStore.get('accessToken')
		}
	};

	$scope.getNetworks = function () {

		var url = '/v1/networks';
		if (!$scope.useNode) {
			url = $scope.rootUrl + url;
		}

		$http.get(url, httpConfig).success(
			function (data) {

				$scope.networks = data;

			});

	}

	$scope.getSubnets = function () {

		var url = '/v1/subnets';
		if (!$scope.useNode) {
			url = $scope.rootUrl + url;
		}

		$http.get(url, httpConfig).success(
			function (data) {

				$scope.subnets = data;

			});

	}

	$scope.getPorts = function () {

		var url = '/v1/ports';
		if (!$scope.useNode) {
			url = $scope.rootUrl + url;
		}

		$http.get(url, httpConfig).success(
			function (data) {
				console.log(data);
				$scope.ports = data;

			});

	}

	$scope.getNats = function () {

		var url = '/v1/nats';
		if (!$scope.useNode) {
			url = $scope.rootUrl + url;
		}

		$http.get(url, httpConfig).success(
			function (data) {

				
				$scope.nats = data;

			});

	}

	$scope.getSecurityGroups = function () {

		var url = '/v1/security-groups';
		if (!$scope.useNode) {
			url = $scope.rootUrl + url;
		}

		$http.get(url, httpConfig).success(
			function (data) {

				
				$scope.securityGroups = data;

			});

	}

	
	$scope.getSecurityGroups();
	$scope.getNats();
	$scope.getPorts();
	$scope.getNetworks();
	$scope.getSubnets();

}

NetworksCtrl.$inject = ['$scope', '$cookieStore', '$http'];

angular.module('dashbordApp')
	.controller('NetworksCtrl', ['$scope', '$cookieStore', '$http', NetworksCtrl]);