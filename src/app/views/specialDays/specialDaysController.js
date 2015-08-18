(function () {
    'use strict';
    angular.module('timeoff').controller('SpecialDaysController', SpecialDaysController);

    function SpecialDaysController() {
        var vm = this;

        vm.title = 'Special days';
    }

}());
