(function() {

    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',
        'app.widgets',

        /* Feature areas */
        'app.account',
        'app.active-staff',
        'app.data',
        //'app.dashboard',
        'app.layout'
    ]);

})();
