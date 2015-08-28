(function () {
    'use strict';

    angular.module('common.services')
        .factory('unauthorizedInterceptorService', ['$q', '$location',
                                                    unauthorizedInterceptorService]);

    function unauthorizedInterceptorService($q, $location) {
        function responseError(rejection) {
            if (rejection.status === 401) {
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        return {
            responseError: responseError
        };
    }
}());
