///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import angularChart = require('angular-chart');
import responseStatisticsDirective = require('./directive');
import responseStatisticsController = require('./controller');

export = angular.module('ht.responseStatistics', [angularChart])
    .controller('htResponseStatisticsController', responseStatisticsController)
    .directive('htResponseStatistics', responseStatisticsDirective.create);