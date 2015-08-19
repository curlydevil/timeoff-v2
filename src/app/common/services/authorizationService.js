(function () {
    'use strict';
    angular.module('common.services')
        .service('authorizationService', ['$q', '$state',
                                          'enumService', 'userService',
                                          'communicationService', authorizationService]);

    function authorizationService($q, $state, enumService, userService, communicationService) {
        var userRoles = enumService.getUserRoles();

        var viewsRestrictions = {
            login: [],
            dashboard: [],
            tasks: [
                userRoles.SM,
                userRoles.DM,
                userRoles.HR
            ],
            absenceRequests: [],
            employees: [
                userRoles.SM,
                userRoles.DM,
                userRoles.HR,
                userRoles.ADM
            ],
            specialDays: [],
            employeeGroups: [
                userRoles.SM,
                userRoles.DM
            ],
            reports: [
                userRoles.HR
            ],
            employeePositions: [
                userRoles.HR,
                userRoles.ADM
            ],
            logs: [
                userRoles.ADM
            ],
            calendar: [
                userRoles.SM,
                userRoles.DM,
                userRoles.HR
            ],
            overtimes: [
                userRoles.SM,
                userRoles.FADM
            ]
        };

        function getViewsRestrictions() {
            return viewsRestrictions;
        }

        function canUserAccess(viewName) {
            var accessRoles = viewsRestrictions[viewName];
            return userService.getCurrentUser() && (!accessRoles.length ||
                _.intersection(accessRoles, userService.getCurrentUser().roles).length);
        }

        function resolveUserAccess(viewName) {
            var userAccess = $q.defer();

            if (userService.getCurrentUser() && canUserAccess(viewName)) {
                userAccess.resolve();
            } else {
                userAccess.reject();
            }

            return userAccess.promise;
        }

        function logIn(user) {
            return communicationService.logIn(user).then(
                userService.loadUser);
        }

        function logOut() {
            userService.unloadUser();
            return $q.resolve();
        }

        return {
            getViewsRestrictions: getViewsRestrictions,
            canUserAccess: canUserAccess,
            resolveUserAccess: resolveUserAccess,
            logIn: logIn,
            logOut: logOut
        };
    }

}());
