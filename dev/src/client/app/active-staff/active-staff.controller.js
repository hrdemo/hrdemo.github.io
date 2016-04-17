(function () {
    'use strict';

    angular
        .module('app.active-staff')
        .controller('ActiveStaffController', ActiveStaffController);

    /* @ngInject */
    function ActiveStaffController($mdDialog, $mdToast, $state, $timeout, $localStorage) {
        var vm = this;
        vm.title = 'ActiveStaff';
        vm.closeDialog = closeDialog;
        vm.selectedIndex = 0;
        vm.activate = activate;
        vm.isLoading = true;
        vm.saveData = saveData;
        vm.sendNotification = sendNotification;
        vm.showTab = showTab;
        vm.selectedCountry = $localStorage.selectedItem.name;
        vm.isLocal = false;
        vm.tab1 = true;
        vm.tab2 = false;
        vm.tab3 = false;

        vm.activate();

        function activate() {
            if ($localStorage.userName === 'localhr') {
                vm.isLocal = true;
            }
        }

        function closeDialog() {
            $mdDialog.hide();
        }

        function saveData(params) {
            showMessage('Data saved');
        }

        function sendNotification(params) {
            showMessage('Notification sent');
        }

        function showMessage(message) {
            $mdToast.show(
                $mdToast.simple()
                    .action('OK')
                    .textContent(message)
                    .position('bottom right')
                    .hideDelay(4000)
            );
        }

        function showTab(tabIndex) {
            vm.tab1 = vm.tab2 = vm.tab3 = false;

            if (tabIndex === 1) vm.tab1 = true;
            if (tabIndex === 2) vm.tab2 = true;
            if (tabIndex === 3) vm.tab3 = true;
        }
    }
})();
