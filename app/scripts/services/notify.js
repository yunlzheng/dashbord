'use strict';

angular.module('dashbordApp')
    .service('notify', [
        function Notify() {

            var NotifyService = {};

            var alerts = [];

            NotifyService.info = function (message) {

                var info = {
                    type: 'info',
                    msg: message
                };
                //alerts.push(info);

            };

            NotifyService.error = function (message) {
                var error = {
                    type: 'danger',
                    msg: message
                };
                alerts.push(error);

            };

            NotifyService.alert = function (message) {

                var alert = {
                    type: 'warning',
                    msg: message
                };
                alerts.push(alert);

            };

            NotifyService.getAlerts = function (message) {

                return alerts;

            };

            NotifyService.closeAlert = function(index) {
                alerts.splice(index, 1);
            };

            return NotifyService;

        }
    ]);