(function () {
    'use strict';
    angular.module('timeoff').controller('TasksController', TasksController);

    function TasksController() {
        var vm = this;

        vm.title = 'Tasks';
    }

}());
