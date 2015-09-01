(function () {
    'use strict';
    angular.module('timeoff')
        .controller('NavBarController', ['$state',
                                         'userService', 'navigationService', 'authorizationService',
                                         NavBarController]);

    function NavBarController($state, userService, navigationService, authorizationService) {
        var vm = this;

        vm.isCollapsed = true;
        vm.isLoggedIn = isLoggedIn;

        vm.isTabActive = isTabActive;
        vm.isSubTabActive = isSubTabActive;
        vm.isTabAllowed = isTabAllowed;
        vm.getMainNavigationItems = getMainNavigationItems;
        vm.getAbsenceRequestsNavigationItems = getAbsenceRequestsNavigationItems;
        vm.getUser = getUser;
        vm.logOut = logOut;

        function getMainNavigationItems() {
            return navigationService.getMainNavigationItems();
        }

        function getAbsenceRequestsNavigationItems() {
            return navigationService.getAbsenceRequestsNavigationItems();
        }

        function isTabAllowed(navItem) {
            return authorizationService.canUserAccess(navItem.name);
        }

        function getUser() {
            return userService.getCurrentUser();
        }

        function isLoggedIn() {
            return userService.getCurrentUser().loggedIn;
        }

        function isTabActive(stateName) {
            return $state.current.name === stateName;
        }

        function isSubTabActive(stateName) {
            return $state.current.name.split('.')[0] === stateName.split('.')[0];
        }

        function logOut() {
            authorizationService.logOut();
        }
    }
}());
