'use strict';

angular.module('dashbordApp')
    .controller('MainCtrl', ['$rootScope', '$scope', 'breadcrumbs', 'notify', 'platforms', function ($rootScope, $scope, breadcrumbs, notify, platforms) {

        $scope.breadcrumbs = breadcrumbs;
        $scope.notify = notify;

        $scope.menus = [
            {
                name: '主页',
                url: '#/',
                icon: 'fa-tachometer '
            },
            {
                name: '物理机',
                url: '#/nodes',
                icon: 'fa-cloud'
            },
            {
                name: '虚拟机',
                url: '#/instances',
                icon: 'fa-desktop'
            },
            {
                name: '存储卷',
                url: '#/volumes',
                icon: 'fa-hdd-o'
            },
            {
                name: '网络',
                url: '#/networks',
                icon: 'fa-code-fork '
            },
            {
                name: '路由器',
                url: '#/routes',
                icon: 'fa-exchange'
            },
            {
                name: '安全组',
                url: '#/security-groups',
                icon: 'fa-credit-card'
            },
            {
                name: '镜像',
                url: '#/images',
                icon: 'fa-camera '
            },
            {
                name: '规格',
                url: '#/flavors',
                icon: 'fa-bullseye'
            },
            //{
            //	name: '设置',
            //	url: '#/settings',
            //	icon: 'fa-cog'
            //},
            {
                name: '帮助',
                url: '#/help',
                icon: 'fa-comment'
            }
        ];

        $scope.pagerConfig = {
            'numPerPage': 10,
            'previousText': '上一页',
            'nextText': '下一页',
            'firstText': '第一页',
            'lastText': '最后一页'
        };

        $scope.select = function (menu) {

            $scope.currentMenu = menu;

        };

        $scope.status = {
            'showSideMenu': true
        };

        $scope.toggleMenu = function () {

            $scope.status.showSideMenu = !$scope.status.showSideMenu;

        };

        $scope.openMenu = function () {
            $scope.status.showSideMenu = true;
        };

        $scope.closeMenu = function () {
            $scope.status.showSideMenu = false;
        };

        $scope.getPlatforms = function () {
            platforms.getAll().success(function (data) {

                $scope.platforms = data.data;

            });
        };

        $scope.defaultPlatform = function() {

            return $scope.platforms[0];

        };

        $scope.getPlatforms();

    }
    ]);