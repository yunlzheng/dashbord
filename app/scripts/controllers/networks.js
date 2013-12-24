'use strict';

function NetworksCtrl($scope, networks, subnets, ports, nats, securityGroups) {

	$scope.getNetworks = function () {

		networks.query().success(
			function (data) {

				$scope.networks = data;

			});

	}

	$scope.getSubnets = function () {

		subnets.query().success(
			function (data) {

				$scope.subnets = data;

			});

	}

	$scope.getPorts = function () {

		ports.query().success(
			function (data) {
				console.log(data);
				$scope.ports = data;

			});

	}

	$scope.getNats = function () {

		nats.query().success(
			function (data) {


				$scope.nats = data;

			});

	}

	$scope.getSecurityGroups = function () {

		securityGroups.query().success(
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

NetworksCtrl.$inject = ['$scope', 'networks', 'subnets', 'ports', 'nats', 'securityGroups'];

angular.module('dashbordApp')
	.controller('NetworksCtrl', ['$scope', 'networks', 'subnets', 'ports', 'nats', 'securityGroups', NetworksCtrl]);