'use strict';

angular.module('dashbordApp')
    .factory('Respinterceptor', ['$q', 'notify',
        function Respinterceptor($q, notify) {

            return function(promise) {

                return promise.then(function(response) {
                    if (response.config.headers['X-Api-Request']) {

                        if (response.data.code === '0') {
                            notify.info('sync success');
                        } else {
                            notify.alert(response.data.message);
                        }
                    }
                    return response;

                }, function(response) {

                    if (response.config.headers['X-Api-Request']) {
                        notify.error(response.data);
                    }
                    return $q.reject(response);

                });

            };

        }
    ]);