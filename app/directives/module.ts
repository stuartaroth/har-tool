///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

import chartSwitcher = require('./chartSwitcher/module');
import statistics = require('./statistics/module');
import topbar = require('./topbar/module');
import upload = require('./upload/module');

export = angular.module('ht.directives', [
    chartSwitcher.name,
    statistics.name,
    topbar.name,
    upload.name
]);