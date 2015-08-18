(function () {
    'use strict';
    angular.module('timeoff').controller('CalendarController', CalendarController);

    function CalendarController() {
        var vm = this;

        vm.title = 'Calendar';
    }

}());
