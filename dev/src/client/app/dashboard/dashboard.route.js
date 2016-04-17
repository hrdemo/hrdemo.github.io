(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'dashboard',
                abstract: true,
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    url: ''
                }
            },
            {
                state: 'physicians',
                config: {
                    parent: 'dashboard',
                    url: '/physicians',
                    templateUrl: 'app/dashboard/physicians-medicover.html',
                    controller: 'TotalsController',
                    controllerAs: 'vm',
                    title: 'physicians'
                }
            }
        ];
    }
})();
