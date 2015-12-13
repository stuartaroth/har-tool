///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

import main = require('./main/module');
import responseStatistics = require('./responseStatistics/module');
import topbar = require('./topbar/module');
import upload = require('./upload/module');

export = angular.module('ht.directives', [
    main.name,
    responseStatistics.name,
    topbar.name,
    upload.name
]);