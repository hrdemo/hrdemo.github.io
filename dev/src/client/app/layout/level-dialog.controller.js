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
        vm.dataLevels = [
            { id: 1, name: 'Group', desc: 'Medicover and Synevo divisions', items: [] },
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
                    { id: 1, name: 'Medicover Poland' },
                    { id: 2, name: 'Medicover Romania' },
                    { id: 3, name: 'Synevo Romania' }
                ]
            },
            {
                id: 5, name: 'Location', desc: 'Laboratory or Medical Center',
                items: [
                    { id: 1, name: 'Lab 1' },
                    { id: 2, name: 'Lab 2' },
                    { id: 3, name: 'Warsaw CM Atrium' }
                ]
            }
        ];
        vm.selectedItemId;

        function activate() {

        }

        function closeDialog() {
            
            vm.$storage = $localStorage.$default({
                selectedItem: { id: vm.selectedItem.id, name: vm.selectedItem.name }
            });
            
            $mdDialog.hide();
        }

        function nextStep() {
            vm.step1 = false;
            vm.step2 = true;

            vm.items = vm.dataLevels[vm.selectedLevel.id - 1].items;

            if (vm.items.length === 0) {
                $mdDialog.hide();
            }

            vm.$storage = $localStorage.$default({
                selectedLevel: { id: vm.selectedLevel.id, name: vm.selectedLevel.name }
            });
        }
        function previousStep() {
            vm.step1 = true;
            vm.step2 = false;

            vm.selectedItemId = 0;
            
        }
    }
})();
