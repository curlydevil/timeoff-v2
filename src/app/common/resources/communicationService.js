(function () {
    'use strict';
    angular.module('common.services').factory('communicationService', ['$http', '$resource',
                                                               communicationService]);

    function communicationService($http, $resource) {
        var baseUrl = 'https://localhost:44300/';

        var requestReasonsUrl = baseUrl + 'api/AbsenceRequestReason/GetAbsenceRequestReasons';
        var logOnUrl = baseUrl + 'api/account/LogOn';
        var logOutUrl = baseUrl + 'api/account/SignOut';
        var getUserInfoUrl = baseUrl + 'api/account/GetCurrentUserInfo';
        var getUserpicUrl = baseUrl + 'api/employee/GetCurrentEmployeeImageAsBase64String';

        function logIn(user) {
            return $http.post(logOnUrl, user);
        }

        function logOut() {
            return $http.post(logOutUrl);
        }

        function getUserInfo() {
            return $http.get(getUserInfoUrl);
        }

        function getUserpic() {
            return $http.get(getUserpicUrl);
        }

        return {
            logIn: logIn,
            getUserInfo: getUserInfo,
            getUserpic: getUserpic,
            logOut: logOut
        };
    }
}());
