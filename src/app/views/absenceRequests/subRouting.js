(function () {
    'use strict';

    angular.module('timeoff').config(['$stateProvider', routeConfig]);

    function routeConfig($stateProvider) {

        $stateProvider
            .state('absenceRequests.my', {
                url: '/my',
                controller: 'MyRequestsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/my/myRequests.html',
                resolve: {
                    checkAuth: ['authorizationService', myRequestsPermissionCheck]
                }
            })
            .state('absenceRequests.add', {
                url: '/add',
                controller: 'AddRequestController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/add/addRequest.html',
                resolve: {
                    checkAuth: ['authorizationService', addRequestPermissionCheck]
                }
            })
            .state('absenceRequests.view', {
                url: '/view',
                controller: 'ViewRequestController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/view/viewRequest.html',
                resolve: {
                    checkAuth: ['authorizationService', viewRequestPermissionCheck]
                }
            })
            .state('absenceRequests.hr', {
                url: '/hr',
                controller: 'HrRequestsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/hr/hrRequests.html',
                resolve: {
                    checkAuth: ['authorizationService', hrRequestsPermissionCheck]
                }
            })
            .state('absenceRequests.sm', {
                url: '/sm',
                controller: 'SmRequestsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/sm/smRequests.html',
                resolve: {
                    checkAuth: ['authorizationService', smRequestsPermissionCheck]
                }
            })
            .state('absenceRequests.dm', {
                url: '/dm',
                controller: 'DmRequestsController',
                controllerAs: 'vm',
                templateUrl: 'src/app/views/absenceRequests/dm/DmRequests.html',
                resolve: {
                    checkAuth: ['authorizationService', dmRequestsPermissionCheck]
                }
            });

        function myRequestsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.my');
        }

        function addRequestPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.add');
        }

        function viewRequestPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.view');
        }

        function hrRequestsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.hr');
        }

        function smRequestsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.sm');
        }

        function dmRequestsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.dm');
        }
    }
}());
