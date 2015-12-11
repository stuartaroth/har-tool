///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

export = angular.module('ht.views', [
    'ngRoute'
]).config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/upload', {
        template: '<ht-upload></ht-upload>'
    });
    $routeProvider.otherwise({redirectTo: '/upload'});
}]);