'use strict';

function FlavorCtrl($scope, flavors, $modal) {

	$scope.flavors = []

	$scope.filteredFlavors = [];

	$scope.maxSize = 5;
	$scope.currentPage = 1;
	$scope.numPerPage = 6;

	$scope.bigTotalItems = function () {
		return $scope.flavors.length;
	}

	$scope.$watch('currentPage + numPerPage + flavors', function () {

		var begin = (($scope.currentPage - 1) * $scope.numPerPage),
			end = begin + $scope.numPerPage;
		console.log(begin+"---"+end);
		$scope.filteredFlavors = $scope.flavors.slice(begin, end);
		console.log($scope.filteredFlavors);
	
	});

	$scope.getFlavors = function () {
		flavors.query().success(function (data) {

			if(data.code==='0'){
				$scope.flavors = data.data;
			}

		}).error(function () {

			$scope.flavors = [
		
				{
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-4409-ad47-2a372bd96b88",
					is_public: false,
					name: "ci2_ddsa06.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-4409-a-2a372bd96b88",
					is_public: false,
					name: "ci2_dgfds06.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-4409-d-2a372bd96b88",
					is_public: false,
					name: "ci2_dhgf37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-a-ad47-2a372bd96b88",
					is_public: false,
					name: "ci2_defjhg6.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-4-4409-ad47-2a372bd96b88",
					is_public: false,
					name: "ci2_duytr06.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-8-ad47-2a372bd96b88",
					is_public: false,
					name: "ci2_defindsa206.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-1-ad47-2a372bd96b88",
					is_public: false,
					name: "ci2_definfdsa206.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-4409-ad47-d",
					is_public: false,
					name: "ci2fdsa08206.37",
					ram: 512,
					swap: "",
					vcpus: 1
				}, {
					disk: 20,
					ephemeral: 0,
					id: "0d922239-0564-4409-a-2a372bd96b88",
					is_public: false,
					name: "cfdsafds.37",
					ram: 512,
					swap: "",
					vcpus: 1
				},
			];
			

		});
	};

	$scope.removeFlavor = function () {

		flavors.remove($scope.selected.id).success(function (data) {

			if (data.code === '0') {
				$scope.getFlavors();
			}

		});


	};

	$scope.createFlavor = function (flavor) {

		flavors.save(flavor).success(function (data) {

			if (data.code === '0') {
				$scope.getFlavors();
			}

		});

	}

	$scope.selecte = function (flavor) {

		$scope.selected = flavor;

	};

	$scope.openCreateModal = function () {

		var modalInstance = $modal.open({
			templateUrl: 'newFlavorModal.html',
			controller: NewFlavorModalCtrl,
			resolve: {}
		});

		modalInstance.result.then(function (newFlavor) {

			$scope.newFlavor = newFlavor;
			$scope.createFlavor(newFlavor);

		});

	};


	$scope.getFlavors();


}

function NewFlavorModalCtrl($scope, $modalInstance) {

	$scope.ok = function (newFlavor) {
		$modalInstance.close(newFlavor);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

};

NewFlavorModalCtrl.$inject = ['$scope', '$modalInstance'];

angular.module('dashbordApp')
	.controller('FlavorCtrl', ['$scope', 'flavors', '$modal',
		FlavorCtrl
	]);