(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('PhysiciansMedicoverController', PhysiciansMedicoverController);

    /* @ngInject */
    function PhysiciansMedicoverController($mdDialog, $mdToast, $state) {
        var vm = this;

        vm.save = save;

        function save(params) {
            $mdToast.show(
                $mdToast.simple()
                    .action('OK')
                    .textContent('Data saved')
                    .position('bottom right')
                    .hideDelay(4000)
            );
        }
    }
})();
