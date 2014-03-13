'use strict';

angular.module('dashbordApp')
    .service('notify' , ['$timeout',

        function Notify($timeout) {

            var NotifyService = {};

            var alerts = [];

            function pushAlert(alert) {

                alerts.push(alert);
                if (alerts.length >= 2) {
                    alerts.shift();
                }
            }

            NotifyService.info = function (message) {

                var info = {
                    type: 'info',
                    msg: message
                };
                console.log(info);


            };

            NotifyService.error = function (message) {
                var error = {
                    type: 'danger',
                    msg: message
                };
                pushAlert(error);
                autoShift();
            };

            NotifyService.alert = function (message) {

                var alert = {
                    type: 'warning',
                    msg: message
                };
                pushAlert(alert);
                autoShift();

            };

            NotifyService.getAlerts = function () {

                return alerts;

            };

            NotifyService.closeAlert = function (index) {
                alerts.splice(index, 1);
            };


            function autoShift(){

                $timeout(function(){

                    alerts.shift();

                }, 2000);

            }


            return NotifyService;

        }
    ]);