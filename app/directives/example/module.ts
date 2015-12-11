///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import exampleDirective = require('./directive');
import exampleController = require('./controller');

export = angular.module('ht.example', [])
    .controller('htExampleController', exampleController)
    .directive('htExample', exampleDirective.create);