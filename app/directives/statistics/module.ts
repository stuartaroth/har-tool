///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import statisticsDirective = require('./directive');
import statisticsController = require('./controller');

export = angular.module('ht.statistics', [])
    .controller('htStatisticsController', statisticsController)
    .directive('htStatistics', statisticsDirective.create);