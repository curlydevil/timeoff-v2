(function () {
    'use strict';
    angular.module('timeoff').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
                                      routeConfig]);

    function routeConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('UnauthorizedInterceptorService');
        $urlRouterProvider.otherwise('/');

        var views = {
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

        $stateProvider
            .state(views.login, {
                url: '/login',
                controller: 'LoginController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/login/login.html',
                resolve: {
                    logOut: ['authorizationService', resolveLogOut]
                }
            })
            .state(views.dashboard, {
                url: '/',
                controller: 'DashboardController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/dashboard/dashboard.html',
                resolve: {
                    checkAuth: ['authorizationService', '$state', dashboardPermissionCheck]
                }
            })
            .state(views.tasks, {
                url: '/tasks',
                controller: 'TasksController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/tasks/tasks.html',
                resolve: {
                    checkAuth: ['authorizationService', tasksPermissionCheck]
                }
            })
            .state(views.absenceRequests, {
                url: '/absenceRequests',
                controller: 'AbsenceRequestsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/absenceRequests.html',
                resolve: {
                    checkAuth: ['authorizationService', absenceRequestsPermissionCheck]
                }
            })
            .state(views.employees, {
                url: '/employees',
                controller: 'EmployeesController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/employees/employees.html',
                resolve: {
                    checkAuth: ['authorizationService', employeesPermissionCheck]
                }
            })
            .state(views.specialDays, {
                url: '/specialDays',
                controller: 'SpecialDaysController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/specialDays/specialDays.html',
                resolve: {
                    checkAuth: ['authorizationService', specialDaysPermissionCheck]
                }
            })
            .state(views.employeeGroups, {
                url: '/employeeGroups',
                controller: 'EmployeeGroupsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/employeeGroups/employeeGroups.html',
                resolve: {
                    checkAuth: ['authorizationService', employeeGroupsPermissionCheck]
                }
            })
            .state(views.reports, {
                url: '/reports',
                controller: 'ReportsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/reports/reports.html',
                resolve: {
                    checkAuth: ['authorizationService', reportsPermissionCheck]
                }
            })
            .state(views.employeePositions, {
                url: '/employeePositions',
                controller: 'EmployeePositionsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/employeePositions/employeePositions.html',
                resolve: {
                    checkAuth: ['authorizationService', employeePositionsPermissionCheck]
                }
            })
            .state(views.logs, {
                url: '/logs',
                controller: 'LogsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/logs/logs.html',
                resolve: {
                    checkAuth: ['authorizationService', logsPermissionCheck]
                }
            })
            .state(views.calendar, {
                url: '/calendar',
                controller: 'CalendarController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/calendar/calendar.html',
                resolve: {
                    checkAuth: ['authorizationService', calendarPermissionCheck]
                }
            })
            .state(views.overtimes, {
                url: '/overtimes',
                controller: 'OvertimesController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/overtimes/overtimes.html',
                resolve: {
                    checkAuth: ['authorizationService', overtimesPermissionCheck]
                }
            });

        function tasksPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.tasks);
        }

        function resolveLogOut(authorizationService) {
            return authorizationService.logOut();
        }

        function dashboardPermissionCheck(authorizationService, $state) {
            return authorizationService.resolveUserAccess(views.dashboard)
                .catch(function () {
                    $state.go('login');
                });
        }

        function absenceRequestsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.absenceRequests);
        }

        function specialDaysPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.specialDays);
        }

        function employeesPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.employees);
        }

        function employeeGroupsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.employeeGroups);
        }

        function reportsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.reports);
        }

        function employeePositionsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.employeePositions);
        }

        function logsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.logs);
        }

        function calendarPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.calendar);
        }

        function overtimesPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess(views.overtimes);
        }
    }
}());
