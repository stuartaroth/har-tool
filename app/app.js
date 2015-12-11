'use strict';

define([
    'angular',
    'angularRoute',
    'services/module',
    'directives/module',
    'views/module'
], function(
    angular,
    angularRoute,
    services,
    directives,
    views
) {
    return angular.module('ht', [
        'ngRoute',
        'ht.services',
        'ht.directives',
        'ht.views'
    ])
});