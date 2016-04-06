(function () {
    'use strict';

    angular
        .module('app.account')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.title = 'Login';
        vm.login = login;

        function login() {
            $state.go('totals');
        }
    }
})();
