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
                 
        function showAlert() {
            $mdDialog.show({
                controller: 'DashboardDialog',
                templateUrl: 'app/dashboard/period.tmpl.html',
                clickOutsideToClose:true
            });
        }
        
        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
