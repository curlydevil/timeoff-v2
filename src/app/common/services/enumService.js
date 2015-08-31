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
            absenceRequests: 'absenceRequests.my',
            employees: 'employees',
            specialDays: 'specialDays',
            employeeGroups: 'employeeGroups',
            reports: 'reports',
            employeePositions: 'employeePositions',
            logs: 'logs',
            calendar: 'calendar',
            overtimes: 'overtimes'
        };

        var sortingOptions = {
            order: {
                asc: 'Asc',
                desc: 'Desc'
            },
            column: {
                created: 'Created',
                startDate: 'StartDate',
                endDate: 'EndDate',
                reason: 'Reason',
                status: 'Status',
                stage: 'Stage',
                employee: 'Employee',
                sm: 'ServiceManager',
                dm: 'DepartmentManager',
                firstName: 'FirstName',
                lastName: 'LastName',
                login: 'Login',
                startWorkingDate: 'StartWorkingDate',
                type: 'Type',
                absenceRequest: {
                    madeBy: 'AbsenceRequestBy',
                    period: 'AbsenceRequestPeriod',
                    created: 'AbsenceRequestCreated'
                },
                overtime: {
                    compensation: 'TypeCompensation',
                    hoursOrQuantity: 'HoursOrQuantity',
                    isBillable: 'IsBillable',
                }
            }
        };

        function getUserRoles() {
            return userRoles;
        }

        function getViewsNames() {
            return viewsNames;
        }

        function getSortingOptions() {
            return sortingOptions;
        }

        return {
            getUserRoles: getUserRoles,
            getViewsNames: getViewsNames,
            getSortingOptions: getSortingOptions
        };
    }
}());
