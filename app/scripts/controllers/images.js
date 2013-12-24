'use strict';

function ImagesCtrl($scope, images){

	images.query().success(function(data){

		$scope.images = data;

	});

}

angular.module('dashbordApp')
	.controller('ImagesCtrl', ['$scope', 'images', ImagesCtrl]);