(function() {
    'use strict';

    angular
        .module('app.active-staff')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'active-staff',
                config: {
                    url: '/active-staff',
                    templateUrl: 'app/active-staff/active-staff.html',
                    controller: 'ActiveStaffController',
                    controllerAs: 'vm',
                    title: 'active-staff'
                }
            }
        ];
    }
})();
