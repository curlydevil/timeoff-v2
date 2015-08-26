(function () {
    'use strict';
    angular.module('common.services')
        .factory('constantsService', constantsService);

    function constantsService() {
        var baseUrl = 'https://localhost:44300/api/';

        return {
            baseUrl: baseUrl
        };
    }

}());
