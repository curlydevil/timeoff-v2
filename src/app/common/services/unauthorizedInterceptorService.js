(function () {
    'use strict';

    angular.module('common.services')
        .service('UnauthorizedInterceptorService', ['$q', '$location',
                                                    UnauthorizedInterceptorService]);

    function UnauthorizedInterceptorService($q, $location) {
        this.responseError = function (rejection) {
            if (rejection.status === 401) {
                $location.path('/login');
            }
            return $q.reject(rejection);
        };
    }
}());
