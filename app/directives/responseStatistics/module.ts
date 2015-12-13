///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import responseStatisticsDirective = require('./directive');
import responseStatisticsController = require('./controller');

export = angular.module('ht.responseStatistics', [])
    .controller('htResponseStatisticsController', responseStatisticsController)
    .directive('htResponseStatistics', responseStatisticsDirective.create);