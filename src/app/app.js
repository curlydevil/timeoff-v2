(function () {
    'use strict';

    angular.module('timeoff', ['ui.router', 'ui.bootstrap',
                               'common.services'])
        .config(['$httpProvider', httpConfig]);

    function httpConfig($httpProvider) {
        $httpProvider.interceptors.push('unauthorizedInterceptorService');
        $httpProvider.defaults.withCredentials = true;
    }
}());
