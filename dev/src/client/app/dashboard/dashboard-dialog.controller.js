(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardDialog', DashboardDialog);

    /* @ngInject */
    function DashboardDialog($scope, $mdDialog, $state) {
        var vm = this;
        vm.title = 'Dashboard';
        $scope.closeDialog = closeDialog;

        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
