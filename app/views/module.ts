///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

export = angular.module('ht.views', [
    'ngRoute'
]).config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/upload', {
        template: '<ht-upload></ht-upload>'
    });
    $routeProvider.when('/statistics', {
        template: '<ht-statistics></ht-statistics>'
    });
    $routeProvider.otherwise({redirectTo: '/upload'});
}]);