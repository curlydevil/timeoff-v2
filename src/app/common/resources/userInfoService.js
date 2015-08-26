(function () {
    'use strict';
    angular.module('common.services')
        .factory('userInfoService', ['$http', 'constantsService', userInfoService]);

    function userInfoService($http, constantsService) {
        var logOnUrl = constantsService.baseUrl + 'account/LogOn';
        var logOutUrl = constantsService.baseUrl + 'account/SignOut';
        var getUserInfoUrl = constantsService.baseUrl + 'account/GetCurrentUserInfo';
        var getUserpicUrl = constantsService.baseUrl + 'employee/GetCurrentEmployeeImageAsBase64String';

        var userCommunications = {
            logIn: logIn,
            getUserInfo: getUserInfo,
            getUserpic: getUserpic,
            logOut: logOut
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

        return userCommunications;
    }

}());
