'use strict';

define([
    'underscore',
    'angular',
    'angularRoute',
    'services/module',
    'directives/module',
    'views/module'
], function(
    _,
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