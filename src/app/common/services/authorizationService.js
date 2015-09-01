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
            'absenceRequests.my': [],
            'absenceRequests.add': [],
            'absenceRequests.view': [],
            'absenceRequests.hr': [userRoles.HR],
            'absenceRequests.sm': [userRoles.SM],
            'absenceRequests.dm': [userRoles.DM],
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
            return userService.getCurrentUser().loggedIn && (!accessRoles.length ||
                _.intersection(accessRoles, userService.getCurrentUser().roles).length);
        }

        function resolveUserAccess(viewName) {
            var userAccess = $q.defer();
            if (userService.getCurrentUser().loggedIn) {
                makeSimpleRolescheck(userAccess, viewName);
            } else {
                userService.fetchUserData().then(function () {
                    makeSimpleRolescheck(userAccess, viewName);
                }, userAccess.reject);
            }
            return userAccess.promise
                .catch(function () {
                    if (!$state.current.name) {
                        $state.go('login');
                    }
                });
        }

        function makeSimpleRolescheck(userAccess, viewName) {
            if (canUserAccess(viewName)) {
                userAccess.resolve();
            } else {
                userAccess.reject();
            }
        }

        function logIn(user) {
            return communicationService.user.logIn(user).then(
                userService.fetchUserData);
        }

        function logOut() {
            return communicationService.user.logOut().then(function () {
                userService.unloadUser();
                $state.go('login');
            });
        }

        return {
            canUserAccess: canUserAccess,
            resolveUserAccess: resolveUserAccess,
            logIn: logIn,
            logOut: logOut
        };
    }

}());
