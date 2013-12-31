'use strict';

angular.module('dashbordApp')
  .controller('SecurityGroupsCtrl', ['$scope', 'securityGroups', function ($scope, securityGroups) {
    

	$scope.securityGroups = [];

	$scope.filteredSecurityGroups = [];

	$scope.securityGroupMaxSize = 5;
	$scope.securityGroupCurrentPage = 1;
	$scope.securityGroupNumPerPage = 6;

	$scope.securityGroupBigTotalItems = function () {
		return $scope.securityGroups.length;
	};

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

	};

	$scope.getSecurityGroups();

  }]);
