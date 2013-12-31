'use strict';

function MainCtrl($rootScope, $scope, breadcrumbs, notify) {

			$scope.breadcrumbs = breadcrumbs;
			$scope.notify = notify;

			$scope.menus = [
				{
					name: '主页',
					url: '#/',
					icon: 'glyphicon-th-list'
				},
				{
					name: '计算节点',
					url: '#/nodes',
					icon: 'glyphicon-indent-left'
				},
				{
					name: '虚拟实例',
					url: '#/instances',
					icon: 'glyphicon-send'
				},
				{
					name: '存储卷',
					url: '#/volumes',
					icon: 'glyphicon-hdd'
				},
				{
					name: '网络',
					url: '#/networks',
					icon: 'glyphicon-tower'
				},
				{
					name: '虚拟路由',
					url: '#/routes',
					icon: 'glyphicon-indent-left'
				},
				{
					name: '安全组',
					url: '#/security-groups',
					icon: 'glyphicon-indent-right'
				},
				{
					name: '镜像',
					url: '#/images',
					icon: 'glyphicon-list-alt'
				},
				{
					name: '规格',
					url: '#/flavors',
					icon: 'glyphicon-indent-right'
				},
				{
					name: '设置',
					url: '#/settings',
					icon: 'glyphicon-cog'
				},
				{
					name: '帮助',
					url: '#/help',
					icon: 'glyphicon-bullhorn'
				}
			];


			$scope.select =function(menu){

				$scope.currentMenu = menu;

			};

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