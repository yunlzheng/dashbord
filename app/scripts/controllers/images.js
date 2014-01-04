'use strict';

function ImagesCtrl($scope, images) {

	$scope.images = [];
	$scope.filteredImages = [];
	$scope.maxSize = 5;
	$scope.currentPage = 1;
	$scope.numPerPage = 6;

	$scope.bigTotalItems = function () {
        return $scope.images.length;
    };

    $scope.$watch('currentPage + numPerPage + images', function () {

        var begin = (($scope.currentPage - 1) * $scope.numPerPage),
            end = begin + $scope.numPerPage;
        $scope.filteredImages = $scope.images.slice(begin, end);

    });

	$scope.getImages = function () {

		images.query().success(function (data) {

			if (data.code === '0') {
				$scope.images = data.data;
			}

		});
	};

	$scope.getImages();


}

angular.module('dashbordApp')
	.controller('ImagesCtrl', ['$scope', 'images', ImagesCtrl]);