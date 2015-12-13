///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import mainDirective = require('./directive');
import mainController = require('./controller');

export = angular.module('ht.main', [])
    .controller('htMainController', mainController)
    .directive('htMain', mainDirective.create);