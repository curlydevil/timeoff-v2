(function () {
    'use strict';
    angular.module('common.services')
        .service('enumService', enumService);

    function enumService() {
        var userRoles = {
            ADM: 1,
            HR: 2,
            SM: 3,
            DM: 4,
            FADM: 5
        };

        var viewsNames = {
            dashboard: 'dashboard',
            login: 'login',
            tasks: 'tasks',
            absenceRequests: 'absenceRequests',
            employees: 'employees',
            specialDays: 'specialDays',
            employeeGroups: 'employeeGroups',
            reports: 'reports',
            employeePositions: 'employeePositions',
            logs: 'logs',
            calendar: 'calendar',
            overtimes: 'overtimes'
        };

        function getUserRoles() {
            return userRoles;
        }

        function getViewsNames() {
            return viewsNames;
        }

        return {
            getUserRoles: getUserRoles,
            getViewsNames: getViewsNames
        };
    }
}());
