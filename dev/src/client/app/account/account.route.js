(function() {
    'use strict';

    angular
        .module('app.account')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'account',
                abstract: true,
                config: {
                    templateUrl: 'app/account/account.html',
                    url: ''
                }
            },
            {
                state: 'login',
                config: {
                    parent: 'account',
                    url: '/login',
                    templateUrl: 'app/account/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm',
                    title: 'login'
                }
            }
        ];
    }
})();
