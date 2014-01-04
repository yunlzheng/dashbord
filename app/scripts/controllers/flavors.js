'use strict';


function NewFlavorModalCtrl($scope, $modalInstance) {

	$scope.ok = function (newFlavor) {
		$modalInstance.close(newFlavor);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

}

NewFlavorModalCtrl.$inject = ['$scope', '$modalInstance'];

function FlavorCtrl($scope, flavors, $interval, $modal, mockFlavors) {

	$scope.flavors = [];

	$scope.filteredFlavors = [];

	$scope.maxSize = 5;
	$scope.currentPage = 1;
	$scope.numPerPage = 6;

	$scope.bigTotalItems = function () {
		return $scope.flavors.length;
	};

	$scope.$watch('currentPage + numPerPage + flavors', function () {

		var begin = (($scope.currentPage - 1) * $scope.numPerPage),
			end = begin + $scope.numPerPage;
		$scope.filteredFlavors = $scope.flavors.slice(begin, end);

	});

	function countSelect() {
		var count = 0;
		for (var i = 0; i < $scope.filteredFlavors.length; i++) {
			var flavor = $scope.filteredFlavors[i];
			if (flavor.selected === true) {
				$scope.selectedFlavor = flavor;
				count++;
			}

		}
		return count;
	}

	$scope.isSelectedAnyOne = function(){

		return countSelect()!==0;

	};

	$scope.getFlavors = function () {
		flavors.query().success(function (data) {

			if (data.code === '0') {
				$scope.flavors = data.data;
			}

		}).error(function () {

			$scope.flavors = mockFlavors.query();

		});
	};

	$scope.remove = function () {

		for (var i in $scope.filteredFlavors) {

			var flavor = $scope.filteredFlavors[i];
			if (flavor.selected === true) {
				flavors.remove(flavor.id);
			}

		}

		$scope.startSync();

	};

	$scope.createFlavor = function (flavor) {

		flavors.save(flavor).success(function (data) {

			if (data.code === '0') {
				$scope.getFlavors();
			}

		});

	};

	$scope.openCreateModal = function () {

		var modalInstance = $modal.open({
			templateUrl: '/template/modal/createFlavorModal.html',
			controller: NewFlavorModalCtrl,
			resolve: {}
		});

		modalInstance.result.then(function (newFlavor) {

			$scope.newFlavor = newFlavor;
			$scope.createFlavor(newFlavor);

		});

	};

	var timer;

	$scope.startSync = function () {

		$scope.getFlavors();
		if (!angular.isDefined(timer)) {
			timer = $interval(function () {

				$scope.getFlavors();

			}, 5000);
		}

	};

	$scope.stopSync = function () {

		if (angular.isDefined(timer)) {
			$interval.cancel(timer);
			timer = undefined;
		}

	};

	$scope.$on('$destroy', function () {
		$scope.stopSync();
	});

	$scope.startSync();

}


angular.module('dashbordApp')
	.controller('FlavorCtrl', ['$scope', 'flavors', '$interval', '$modal', 'mockFlavors',
		FlavorCtrl
	]);