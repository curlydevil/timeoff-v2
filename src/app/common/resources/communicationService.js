(function () {
    'use strict';
    angular.module('common.services').factory('communicationService', ['$http', '$resource',
                                                               communicationService]);

    function communicationService($http, $resource) {
        var baseUrl = 'https://localhost:44300/';

        var requestReasonsUrl = baseUrl + 'api/AbsenceRequestReason/GetAbsenceRequestReasons';
        var logOnUrl = baseUrl + 'api/account/LogOn';
        var logOffUrl = baseUrl + 'api/account/SignOut';

        function logIn(user) {
            return $http.post(logOnUrl, user);
        }

        return {
            logIn: logIn
        };
    }

}());
