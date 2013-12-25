'use strict';

angular.module('dashbordApp')
    .service('notify', [
        function Notify() {

            var NotifyService = {};

            var info = {};
            var error = {};
            var alert = {};

            NotifyService.info = function (message) {

                info = {
                    type: 'info',
                    msg: message
                };

            };

            NotifyService.getInfo = function (message) {

                return info;

            };

            NotifyService.error = function (message) {
                error = {
                    type: 'error',
                    msg: message
                };

            };

            NotifyService.getError = function (message) {

                return error;

            };

            NotifyService.alert = function (message) {

                alert = {
                    type: 'alert',
                    msg: message
                };


            };

            NotifyService.getAlert = function (message) {

                return alert;

            };

            return NotifyService;

        }
    ]);