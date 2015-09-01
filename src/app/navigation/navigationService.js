(function () {
    'use strict';

    angular.module('timeoff')
        .service('navigationService', ['enumService', navigationService]);

    function navigationService(enumService) {
        var svc = {
            getMainNavigationItems: getMainNavigationItems,
            getAbsenceRequestsNavigationItems: getAbsenceRequestsNavigationItems
        };

        var viewsNames = enumService.getViewsNames();
        var mainNavItems = createMainNavigationItems();
        var arNavItems = createAbsenceRequestsNavigationItems();

        function getMainNavigationItems() {
            return mainNavItems;
        }

        function getAbsenceRequestsNavigationItems() {
            return arNavItems;
        }

        function createMainNavigationItems() {
            var navItems = [];

            navItems.push(new NavigationItem(viewsNames.tasks, 'Tasks'));
            navItems.push(new NavigationItem(viewsNames.absenceRequests.my, 'Requests'));
            navItems.push(new NavigationItem(viewsNames.employees, 'Employees'));
            navItems.push(new NavigationItem(viewsNames.specialDays, 'Special days'));
            navItems.push(new NavigationItem(viewsNames.employeeGroups, 'Groups'));
            navItems.push(new NavigationItem(viewsNames.reports, 'Reports'));
            navItems.push(new NavigationItem(viewsNames.employeePositions, 'Positions'));
            navItems.push(new NavigationItem(viewsNames.logs, 'Logs'));
            navItems.push(new NavigationItem(viewsNames.calendar, 'Calendar'));
            navItems.push(new NavigationItem(viewsNames.overtimes, 'Overtimes'));

            return navItems;
        }

        function createAbsenceRequestsNavigationItems() {
            var navItems = [];

            navItems.push(new NavigationItem(viewsNames.absenceRequests.add, 'Add'));
            navItems.push(new NavigationItem(viewsNames.absenceRequests.my, 'My RQs'));
            navItems.push(new NavigationItem(viewsNames.absenceRequests.hr, 'All users RQs'));
            navItems.push(new NavigationItem(viewsNames.absenceRequests.sm, 'SM users RQs'));
            navItems.push(new NavigationItem(viewsNames.absenceRequests.dm, 'DM users RQs'));

            return navItems;
        }

        function NavigationItem(name, title) {
            this.name = name;
            this.title = title;
        }

        return svc;
    }
}());
