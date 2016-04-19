(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('LevelDialogController', LevelDialogController);

    /* @ngInject */
    function LevelDialogController($scope, $mdDialog, $state, $timeout, $localStorage) {
        var vm = this;
        vm.title = 'Dashboard';
        vm.closeDialog = closeDialog;
        vm.nextStep = nextStep;
        vm.previousStep = previousStep;
        vm.selectedLevel;
        vm.step1 = true;
        vm.step2 = false;
        vm.logout = logout;
        vm.dataLevels = [
            {
                id: 1, name: 'MGOC', desc: 'Medicover and Synevo divisions',
                items: []
            },
            {
                id: 2, name: 'Division', desc: 'Medicover or Synevo division',
                items: [
                    { id: 1, name: 'Medicover' },
                    { id: 2, name: 'Synevo' }
                ]
            },
            {
                id: 3, name: 'Country', desc: 'Poland, Romania, Ukraine, Germany...',
                items: [
                    { id: 1, name: 'Poland' },
                    { id: 2, name: 'Romania' },
                    { id: 3, name: 'Ukraine' },
                    { id: 4, name: 'Germany' }
                ]
            },
            {
                id: 4, name: 'Business Unit', desc: 'Company',
                items: [
                    {
                        id: 1, name: 'Medicover Poland Sp z o.o',
                        division: 'Medicover',
                        country: 'Poland'
                    },
                    {
                        id: 2, name: 'Damiana Medical Center',
                        division: 'Medicover',
                        country: 'Poland'
                    },
                    {
                        id: 3, name: 'Invimed',
                        division: 'Medicover',
                        country: 'Poland'
                    },
                    {
                        id: 4, name: 'Medicover Romania',
                        division: 'Medicover',
                        country: 'Romania'
                    },
                    {
                        id: 5, name: 'Peachea Hospital',
                        division: 'Medicover',
                        country: 'Romania'
                    },
                    {
                        id: 6, name: 'Intersono Ukraine',
                        division: 'Synevo',
                        country: 'Ukraine'
                    },
                    {
                        id: 7, name: 'Synevo Romania',
                        division: 'Synevo',
                        country: 'Romania'
                    }
                ]
            },
            {
                id: 5, name: 'Location', desc: 'Laboratory or Medical Center',
                items: [
                    { id: 1, name: 'Lab 1' },
                    { id: 2, name: 'Lab 2' },
                    { id: 3, name: 'Warsaw CM Atrium' },
                    { id: 4, name: 'Cracow CM Borowieckiego' }
                ]
            }
        ];

        vm.selectedItemId;

        function activate() {

        }

        function closeDialog() {

            vm.$storage = $localStorage.$default({
                selectedItem: {
                    id: vm.selectedItem.id,
                    name: vm.selectedItem.name,
                    division: '',
                    country: ''
                }
            });

            if ($localStorage.selectedLevel.id === 2) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        id: vm.selectedItem.id,
                        name: vm.selectedItem.name,
                        division: '',
                        country: ''
                    }
                });
            }

            if ($localStorage.selectedLevel.id === 3) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        id: vm.selectedItem.id,
                        name: vm.selectedItem.name,
                        division: '',
                        country: ''
                    }
                });
            }

            if ($localStorage.selectedLevel.id === 4) {
                vm.$storage = $localStorage.$default({
                    selectedItem: {
                        id: vm.selectedItem.id,
                        name: vm.selectedItem.name,
                        division: vm.selectedItem.division,
                        country: vm.selectedItem.country
                    }
                });
            }

            $state.go('active-staff');
            $mdDialog.hide();
        }

        function nextStep() {
            vm.step1 = false;
            vm.step2 = true;

            vm.items = vm.dataLevels[vm.selectedLevel.id - 1].items;

            vm.$storage = $localStorage.$default({
                selectedLevel: { id: vm.selectedLevel.id, name: vm.selectedLevel.name }
            });

            if (vm.items.length === 0) {
                $state.go('active-staff');
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
