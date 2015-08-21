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
            });

        function myRequestsPermissionCheck(authorizationService) {
            return authorizationService.resolveUserAccess('absenceRequests.my');
        }
    }
}());
