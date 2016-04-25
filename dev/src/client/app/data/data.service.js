(function () {
    'use strict';

    angular
        .module('app.data')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice() {
        var service = {
            getLevels: getLevels
        };

        return service;

        function getLevels() {
            var levels = [
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
                        {
                            id: 1,
                            name: 'Lab 1',
                            division: 'Synevo',
                            country: 'Romania',
                            business: 'Synevo Bucharest'
                        },
                        {
                            id: 2,
                            name: 'Lab 2',
                            division: 'Synevo',
                            country: 'Romania',
                            business: 'Synevo Bucharest'
                        },
                        {
                            id: 3,
                            name: 'Warszawa CM Atrium',
                            division: 'Medicover',
                            country: 'Poland',
                            business: 'Medicover Sp. z o.o.'
                        },
                        {
                            id: 4,
                            name: 'Krakow CM Borowieckiego',
                            division: 'Medicover',
                            country: 'Poland',
                            business: 'Medicover Sp. z o.o.'
                        }
                    ]
                }
            ];

            return levels;
        }
    }
})();
