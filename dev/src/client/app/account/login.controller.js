(function () {
    'use strict';

    angular
        .module('app.account')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($localStorage, $state) {
        var vm = this;
        vm.title = 'Login';
        vm.login = login;
        vm.user;

        function login() {
            vm.$storage = $localStorage.$default({
                userName: vm.user.name
            });

            $state.go('level');
        }
    }
})();
