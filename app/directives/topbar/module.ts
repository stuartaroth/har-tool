///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import topbarDirective = require('./directive');
import topbarController = require('./controller');

export = angular.module('ht.topbar', [])
    .controller('htTopbarController', topbarController)
    .directive('htTopbar', topbarDirective.create);