(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('LevelDialogController', LevelDialogController);

    /* @ngInject */
    function LevelDialogController($scope, $mdDialog, $state, $timeout, $localStorage, changeLocation, dataservice) {
        var vm = this;
        vm.title = 'Dashboard';
        vm.closeDialog = closeDialog;
        vm.nextStep = nextStep;
        vm.previousStep = previousStep;
        vm.selectedLevel;
        vm.step1 = true;
        vm.step2 = false;
        vm.logout = logout;
        vm.dataLevels = dataservice.getLevels();

        vm.selectedItemId;

        function activate() {

        }

        function closeDialog() {
            delete $localStorage.selectedItem;

            if ($localStorage.selectedLevel.id === 2) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        name: vm.selectedItem.name,
                        country: 'all',
                        business: 'all',
                        location: 'all'
                    }
                });
            }

            if ($localStorage.selectedLevel.id === 3) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        id: vm.selectedItem.id,
                        division: '--',
                        name: vm.selectedItem.name,
                        business: 'all',
                        location: 'all'
                    }
                });
            }

            if ($localStorage.selectedLevel.id === 4) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        id: vm.selectedItem.id,
                        division: vm.selectedItem.division,
                        country: vm.selectedItem.country,
                        name: vm.selectedItem.name,
                        business: 'all',
                        location: 'all'
                    }
                });
            }

            if ($localStorage.selectedLevel.id === 5) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        id: vm.selectedItem.id,
                        division: vm.selectedItem.division,
                        country: vm.selectedItem.country,
                        business: vm.selectedItem.business,
                        name: vm.selectedItem.name,
                    }
                });
            }

            if (changeLocation) {
                $state.reload('active-staff');
            } else {
                $state.go('active-staff', { reload: true });
            }

            $mdDialog.hide();
        }

        function nextStep() {
            vm.step1 = false;
            vm.step2 = true;

            vm.items = vm.dataLevels[vm.selectedLevel.id - 1].items;

            vm.$storage = $localStorage.$default({
                selectedLevel: {
                    id: vm.selectedLevel.id,
                    name: vm.selectedLevel.name
                }
            });

            if (vm.items.length === 0) {
                if (changeLocation) {
                    $state.reload('active-staff');
                } else {
                    $state.go('active-staff', { reload: true });
                }
                $mdDialog.hide();
            }
        }

        function previousStep() {
            vm.step1 = true;
            vm.step2 = false;

            vm.selectedItemId = 0;
        }

        function logout() {
            delete $localStorage.userName;
            delete $localStorage.selectedItem;
            delete $localStorage.selectedLevel;

            $state.go('login');
            $mdDialog.hide();
        }
    }
})();
