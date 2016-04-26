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
        vm.showPhysicians = false;
        vm.showOperations = false;
        vm.showCommercials = false;
        vm.showOfficeFunctions = false;
        vm.tab1 = true;
        vm.tab2 = false;
        vm.tab3 = false;
        vm.changeLocation = changeLocation;
        vm.activate();

        function activate() {
            if ($localStorage.userName === 'localhr') {
                vm.isLocal = true;

                vm.showPhysicians = true;
                vm.showOperations = true;
                vm.showCommercials = true;
                vm.showOfficeFunctions = true;
            }
            vm.selectedDivision = '--';
            vm.selectedCountry = 'all';
            vm.selectedBusiness = 'all';
            vm.selectedLocation = 'all';

            // group
            if ($localStorage.selectedLevel.id === 1) {
                vm.selectedDivision = $localStorage.selectedLevel.name;
            }
            // division
            if ($localStorage.selectedLevel.id === 2) {
                vm.selectedDivision = $localStorage.selectedItem.name;
                vm.selectedCountry = $localStorage.selectedItem.country;
                vm.selectedBusiness = $localStorage.selectedItem.business;
                vm.selectedLocation = $localStorage.selectedItem.location;
            }
            // country
            if ($localStorage.selectedLevel.id === 3) {
                vm.selectedDivision = $localStorage.selectedItem.division;
                vm.selectedCountry = $localStorage.selectedItem.name;
                vm.selectedBusiness = $localStorage.selectedItem.business;
                vm.selectedLocation = $localStorage.selectedItem.location;
            }
            // business
            if ($localStorage.selectedLevel.id === 4) {
                vm.selectedDivision = $localStorage.selectedItem.division;
                vm.selectedCountry = $localStorage.selectedItem.country;
                vm.selectedBusiness = $localStorage.selectedItem.name;
                vm.selectedLocation = $localStorage.selectedItem.location;
            }
            // location
            if ($localStorage.selectedLevel.id === 5) {
                vm.selectedDivision = $localStorage.selectedItem.division;
                vm.selectedCountry = $localStorage.selectedItem.country;
                vm.selectedBusiness = $localStorage.selectedItem.business;
                vm.selectedLocation = $localStorage.selectedItem.name
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

        function changeLocation($event) {
            delete $localStorage.selectedLevel;
            delete $localStorage.selectedItem;

            $timeout(function () {
                $mdDialog.show({
                    controller: 'LevelDialogController',
                    controllerAs: 'vm',
                    templateUrl: 'app/layout/level-dialog.tmpl.html',
                    clickOutsideToClose: false,
                    locals: {
                        changeLocation: true
                    }
                });
            }, 100);

        }
    }
})();
