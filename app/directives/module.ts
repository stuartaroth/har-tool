///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

import chartSwitcher = require('./chartSwitcher/module');
import main = require('./main/module');
import responseStatistics = require('./responseStatistics/module');
import topbar = require('./topbar/module');
import upload = require('./upload/module');

export = angular.module('ht.directives', [
    chartSwitcher.name,
    main.name,
    responseStatistics.name,
    topbar.name,
    upload.name
]);