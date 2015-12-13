///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import chartSwitcherDirective = require('./directive');
import chartSwitcherController = require('./controller');

export = angular.module('ht.chartSwitcher', [])
    .controller('htChartSwitcherController', chartSwitcherController)
    .directive('htChartSwitcher', chartSwitcherDirective.create);