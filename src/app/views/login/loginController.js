(function () {
    'use strict';
    angular.module('timeoff').controller('LoginController', ['authorizationService', '$state',
                                                             LoginController]);

    function LoginController(authorizationService, $state) {
        var vm = this;
        vm.user = {};

        vm.logIn = logIn;

        function logIn(isValid) {
            if (!isValid) {
                return;
            }

            authorizationService.logIn(vm.user)
                .then(function (data) {
                    $state.go('dashboard');
                }, function (data) {
                    humane.log(data.data.Message);
                });
        }
    }

}());
