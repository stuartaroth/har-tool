///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import filetypesDirective = require('./directive');
import filetypesController = require('./controller');

export = angular.module('ht.filetypes', [])
    .controller('htFiletypesController', filetypesController)
    .directive('htFiletypes', filetypesDirective.create);