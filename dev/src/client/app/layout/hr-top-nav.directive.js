(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('hrTopNav', hrTopNav);

    /* @ngInject */
    function hrTopNav ($localStorage, $state) {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'tagline': '=',
                'title': '='
            },
            templateUrl: 'app/layout/hr-top-nav.html'
        };

        /* @ngInject */
        function TopNavController() {
            var vm = this;
            
            vm.logout = logout;
            
            function logout() {
                delete $localStorage.userName;
                delete $localStorage.selectedItem;
                delete $localStorage.selectedLevel;
                
                $state.go('login');
            }
        }

        return directive;
    }
})();
