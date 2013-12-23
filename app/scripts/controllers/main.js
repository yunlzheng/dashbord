'use strict';

angular.module('dashbordApp')
	.controller('MainCtrl', ['$scope', 'breadcrumbs',
		function ($scope, breadcrumbs) {

			$scope.breadcrumbs = breadcrumbs;

			$scope.status = {
				'showSideMenu': true
			};

			$scope.toggleMenu = function () {

				$scope.status.showSideMenu = !$scope.status.showSideMenu;

			};

			$scope.openMenu = function() {
				$scope.status.showSideMenu = true;
			};

			$scope.closeMenu = function() {
				$scope.status.showSideMenu = false;
			};


		}
	]);