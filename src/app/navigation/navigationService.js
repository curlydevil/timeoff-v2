(function () {
    'use strict';

    angular.module('timeoff')
        .service('navigationService', ['enumService', navigationService]);

    function navigationService(enumService) {
        var svc = {
            getNavigationItems: getNavigationItems
        };
        var navItems = createNavigationItems();

        function getNavigationItems() {
            return navItems;
        }

        function createNavigationItems() {
            var navItems = [];
            var viewsNames = enumService.getViewsNames();

            navItems.push(new NavigationItem(viewsNames.tasks,
                'Tasks'));

            navItems.push(new NavigationItem(viewsNames.absenceRequests,
                'Requests'));

            navItems.push(new NavigationItem(viewsNames.employees,
                'Employees'));

            navItems.push(new NavigationItem(viewsNames.specialDays,
                'Special days'));

            navItems.push(new NavigationItem(viewsNames.employeeGroups,
                'Groups'));

            navItems.push(new NavigationItem(viewsNames.reports,
                'Reports'));

            navItems.push(new NavigationItem(viewsNames.employeePositions,
                'Positions'));

            navItems.push(new NavigationItem(viewsNames.logs,
                'Logs'));

            navItems.push(new NavigationItem(viewsNames.calendar,
                'Calendar'));

            navItems.push(new NavigationItem(viewsNames.overtimes,
                'Overtimes'));

            return navItems;
        }

        function NavigationItem(name, title) {
            this.name = name;
            this.title = title;
        }

        return svc;
    }
}());
