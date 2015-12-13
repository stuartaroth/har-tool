'use strict';

define([
    'underscore',
    'angular',
    'chart',
    'angular-chart',
    'angularRoute',
    'services/module',
    'directives/module',
    'views/module'
], function(
    _,
    angular,
    chart,
    angularChart,
    angularRoute,
    services,
    directives,
    views
) {
    return angular.module('ht', [
        'chart.js',
        'ngRoute',
        'ht.services',
        'ht.directives',
        'ht.views'
    ])
});