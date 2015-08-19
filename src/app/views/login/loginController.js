(function () {
    'use strict';
    angular.module('timeoff').controller('LoginController', ['authorizationService',
                                                             LoginController]);

    function LoginController(authorizationService) {
        var vm = this;
        vm.user = {};

        vm.logIn = logIn;

        function logIn(username, password) {
            authorizationService.logIn(vm.user)
                .then(function (data) {
                    humane.log('Logged in as "' + vm.user.userName + '"');
                    console.log(data);
                }, function (data) {
                    humane.log('Login error');
                    console.log(data);
                });
        }
    }

}());
