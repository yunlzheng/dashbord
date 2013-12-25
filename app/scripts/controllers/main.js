'use strict';

function MainCtrl($rootScope, $scope, breadcrumbs, notify) {

			$scope.breadcrumbs = breadcrumbs;
			$scope.notify = notify;

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

angular.module('dashbordApp')
	.controller('MainCtrl', ['$rootScope', '$scope', 'breadcrumbs','notify', MainCtrl
		


	]);