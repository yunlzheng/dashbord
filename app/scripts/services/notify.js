'use strict';

angular.module('dashbordApp')
    .service('notify', [

        function Notify() {

            var NotifyService = {};

            var alerts = [];

            function pushAlert(alert) {

                alerts.push(alert);
                if (alerts.length >= 3) {
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

            };

            NotifyService.alert = function (message) {

                var alert = {
                    type: 'warning',
                    msg: message
                };
                pushAlert(alert);

            };

            NotifyService.getAlerts = function () {

                return alerts;

            };

            NotifyService.closeAlert = function (index) {
                alerts.splice(index, 1);
            };


            return NotifyService;

        }
    ]);