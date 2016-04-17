(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /* @ngInject */
    function ShellController($mdDialog, $timeout, config, logger) {
        var vm = this;

        vm.title = config.appTitle;

        activate();

        function activate() {
            showSelectLevel();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function () {
                vm.showSplash = false;
            }, 1000);
        }

        function showSelectLevel() {
            $timeout(function () {
                $mdDialog.show({
                    templateUrl: 'app/layout/level-dialog.tmpl.html',
                    clickOutsideToClose: false
                });
            }, 100);

        }
    }
})();
