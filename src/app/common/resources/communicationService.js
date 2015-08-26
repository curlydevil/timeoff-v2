(function () {
    'use strict';
    angular.module('common.services')
        .factory('communicationService', ['userInfoService', 'absenceRequestsService', communicationService]);

    function communicationService(userInfoService, absenceRequestsService) {

        return {
            user: userInfoService,
            absenceRequests: absenceRequestsService
        };
    }
}());
