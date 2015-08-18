(function () {
    'use strict';
    angular.module('timeoff').controller('EmployeesController', EmployeesController);

    function EmployeesController() {
        var vm = this;

        vm.title = 'Employees';
    }

}());
