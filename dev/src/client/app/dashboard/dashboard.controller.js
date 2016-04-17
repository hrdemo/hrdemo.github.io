(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    /* @ngInject */
    function Dashboard($mdDialog, $state) {
        var vm = this;
        vm.title = 'Dashboard';
        vm.closeDialog = closeDialog;
        vm.showAlert = showAlert;
        vm.selectedIndex = 0;


        function showAlert() {
           
        }

        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
