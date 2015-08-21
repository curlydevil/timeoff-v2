(function () {
    'use strict';
    angular.module('common.services')
        .service('userService', ['$q', 'communicationService', 'enumService', userService]);

    function userService($q, communicationService, enumService) {
        var userRoles = enumService.getUserRoles();
        var currentUser = new CurrentUser();

        function getCurrentUser() {
            return currentUser;
        }

        function fetchUserData() {
            return communicationService.user.getUserInfo().then(function (data) {
                currentUser.fill(data.data);
                getUserpic();
            });
        }

        function unloadUser() {
            currentUser = new CurrentUser();
        }

        function getUserpic() {
            return communicationService.user.getUserpic().then(function (data) {
                currentUser.picture = data.data.ImageData;
            });
        }

        fetchUserData();

        return {
            getCurrentUser: getCurrentUser,
            fetchUserData: fetchUserData,
            unloadUser: unloadUser
        };

        function CurrentUser() {
            var usr = this;

            usr.roles = [];
            usr.fullName = '';
            usr.id = '';
            usr.dmId = '';
            usr.contactMeVia = '';
            usr.loggedIn = false;
            usr.fill = fill;
            usr.picture = '';

            function fill(data) {
                usr.roles = data.Roles;
                usr.fullName = data.FullName;
                usr.contactMeVia = data.ContactMeVia;
                usr.dmId = data.DepartmentManagerId;
                usr.id = data.Id;
                usr.loggedIn = true;
            }
        }
    }

}());
