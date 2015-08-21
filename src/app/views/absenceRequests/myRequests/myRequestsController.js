(function () {
    'use strict';
    angular.module('timeoff').controller('MyRequestsController', ['communicationService',
                                                                  MyRequestsController]);

    function MyRequestsController(communicationService) {
        var vm = this;

        vm.title = 'My requests';
    }

}());
