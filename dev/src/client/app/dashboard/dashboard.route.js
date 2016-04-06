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
                state: 'totals',
                config: {
                    parent: 'dashboard',
                    url: '/totals',
                    templateUrl: 'app/dashboard/totals.html',
                    controller: 'TotalsController',
                    controllerAs: 'vm',
                    title: 'totals'
                }
            }
        ];
    }
})();
