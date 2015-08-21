(function () {
    'use strict';
    angular.module('common.services').factory('communicationService', ['$http', '$resource',
                                                               communicationService]);

    function communicationService($http, $resource) {
        var baseUrl = 'https://localhost:44300/api/';

        var requestReasonsUrl = baseUrl + 'AbsenceRequestReason/GetAbsenceRequestReasons';
        var logOnUrl = baseUrl + 'account/LogOn';
        var logOutUrl = baseUrl + 'account/SignOut';
        var getUserInfoUrl = baseUrl + 'account/GetCurrentUserInfo';
        var getUserpicUrl = baseUrl + 'employee/GetCurrentEmployeeImageAsBase64String';

        var userCommunications = {
            logIn: logIn,
            getUserInfo: getUserInfo,
            getUserpic: getUserpic,
            logOut: logOut
        };

        var absenceRequestsCommunications = {

        };

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
            user: userCommunications,
        };
    }
}());
