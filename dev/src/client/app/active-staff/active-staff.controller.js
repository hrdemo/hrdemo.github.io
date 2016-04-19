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
        vm.selectedCountry;
        vm.isLocal = false;
        vm.tab1 = true;
        vm.tab2 = false;
        vm.tab3 = false;
        vm.changeLocation = changeLocation;
        vm.activate();

        function activate() {
            if ($localStorage.userName === 'localhr') {
                vm.isLocal = true;
            }
            if ($localStorage.selectedLevel.id === 1) {
                vm.selectedDivision = $localStorage.selectedLevel.name;
                vm.selectedCountry = 'all';
            }
            if ($localStorage.selectedLevel.id === 2) {
                vm.selectedDivision = $localStorage.selectedItem.name;
                vm.selectedCountry = 'all';
                vm.selectedBusiness = 'all';
            }
            if ($localStorage.selectedLevel.id === 3) {
                vm.selectedDivision = '-';
                vm.selectedCountry = $localStorage.selectedItem.name;
                vm.selectedBusiness = 'all';
            }
            if ($localStorage.selectedLevel.id === 4) {
                vm.selectedDivision = $localStorage.selectedItem.division;
                vm.selectedCountry = $localStorage.selectedItem.country;
                vm.selectedBusiness = $localStorage.selectedItem.name;
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
            vm.tab1 = vm.tab2 = vm.tab3 = vm.tab4 = false;

            if (tabIndex === 1) vm.tab1 = true;
            if (tabIndex === 2) vm.tab2 = true;
            if (tabIndex === 3) vm.tab3 = true;
            if (tabIndex === 4) vm.tab4 = true;
        }
        
        function changeLocation() {
            delete $localStorage.selectedLevel;
            delete $localStorage.selectedItem;

            $timeout(function () {
                $mdDialog.show({
                    templateUrl: 'app/layout/level-dialog.tmpl.html',
                    clickOutsideToClose: false
                });
            }, 100);

        }
    }
})();
