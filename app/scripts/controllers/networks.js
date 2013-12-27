'use strict';

function NetworksCtrl($scope, networks, subnets, ports, nats, securityGroups) {

	$scope.networks = [];

	$scope.filteredNetworks = [];

	$scope.networkMaxSize = 5;
	$scope.networkCurrentPage = 1;
	$scope.networkNumPerPage = 6;

	$scope.networkBigTotalItems = function () {
		return $scope.networks.length;
	}

	$scope.$watch('networkCurrentPage + networkNumPerPage + networks', function () {

		var begin = (($scope.networkCurrentPage - 1) * $scope.networkNumPerPage),
			end = begin + $scope.networkNumPerPage;
		$scope.filteredNetworks = $scope.networks.slice(begin, end);
	
	});

	$scope.getNetworks = function () {

		networks.query().success(
			function (data) {
				if (data.code === '0') {
					$scope.networks = data.data;
				}

			});

	}

	$scope.subnets = [];

	$scope.filteredSubnets = [];

	$scope.subnetMaxSize = 5;
	$scope.subnetCurrentPage = 1;
	$scope.subnetNumPerPage = 6;

	$scope.subnetBigTotalItems = function () {
		return $scope.subnets.length;
	}

	$scope.$watch('subnetCurrentPage + subnetNumPerPage + subnets', function () {

		var begin = (($scope.subnetCurrentPage - 1) * $scope.subnetNumPerPage),
			end = begin + $scope.subnetNumPerPage;
		$scope.filteredSubnets = $scope.subnets.slice(begin, end);
	
	});

	$scope.getSubnets = function () {

		subnets.query().success(
			function (data) {
				if (data.code === '0') {
					$scope.subnets = data.data;
				}

			});

	}

	$scope.ports = [];

	$scope.filteredPorts = [];

	$scope.portMaxSize = 5;
	$scope.portCurrentPage = 1;
	$scope.portNumPerPage = 6;

	$scope.portBigTotalItems = function () {
		return $scope.ports.length;
	}

	$scope.$watch('portCurrentPage + portNumPerPage + ports', function () {

		var begin = (($scope.portCurrentPage - 1) * $scope.portNumPerPage),
			end = begin + $scope.portNumPerPage;
		$scope.filteredPorts = $scope.ports.slice(begin, end);
	
	});

	$scope.getPorts = function () {

		ports.query().success(
			function (data) {
				if (data.code === '0') {
					$scope.ports = data.data;
				}

			});

	}

	$scope.nats = [];

	$scope.filteredNats = [];

	$scope.natMaxSize = 5;
	$scope.natCurrentPage = 1;
	$scope.natNumPerPage = 6;

	$scope.natBigTotalItems = function () {
		return $scope.nats.length;
	}

	$scope.$watch('natCurrentPage + natNumPerPage + nats', function () {

		var begin = (($scope.natCurrentPage - 1) * $scope.natNumPerPage),
			end = begin + $scope.natNumPerPage;
		$scope.filteredNats = $scope.nats.slice(begin, end);
	
	});

	$scope.getNats = function () {

		nats.query().success(
			function (data) {

				if (data.code === '0') {
					$scope.nats = data.data;
				}

			});

	}

	$scope.securityGroups = [];

	$scope.filteredSecurityGroups = [];

	$scope.securityGroupMaxSize = 5;
	$scope.securityGroupCurrentPage = 1;
	$scope.securityGroupNumPerPage = 6;

	$scope.securityGroupBigTotalItems = function () {
		return $scope.securityGroups.length;
	}

	$scope.$watch('securityGroupCurrentPage + securityGroupNumPerPage + securityGroups', function () {

		var begin = (($scope.securityGroupCurrentPage - 1) * $scope.securityGroupNumPerPage),
			end = begin + $scope.securityGroupNumPerPage;
		$scope.filteredSecurityGroups = $scope.securityGroups.slice(begin, end);
	
	});

	$scope.getSecurityGroups = function () {

		securityGroups.query().success(
			function (data) {

				if (data.code === '0') {
					$scope.securityGroups = data.data;
					console.log($scope.securityGroups);
				}

			});

	}


	$scope.getSecurityGroups();
	$scope.getNats();
	$scope.getPorts();
	$scope.getNetworks();
	$scope.getSubnets();

}

angular.module('dashbordApp')
	.controller('NetworksCtrl', ['$scope', 'networks', 'subnets', 'ports', 'nats', 'securityGroups', NetworksCtrl]);