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
        vm.isTabAllowed = isTabAllowed;
        vm.getNavigationItems = getNavigationItems;
        vm.getUser = getUser;

        function getNavigationItems() {
            return navigationService.getNavigationItems();
        }

        function isTabAllowed(navItem) {
            return authorizationService.canUserAccess(navItem.name);
        }

        function getUser() {
            return userService.getCurrentUser();
        }

        function isLoggedIn() {
            return userService.getCurrentUser() !== null;
        }

        function isTabActive(stateName) {
            return $state.current.name === stateName;
        }
    }
}());
