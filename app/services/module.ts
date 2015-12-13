///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');
import manager = require('./manager');
import sorting = require('./sorting');

export = angular.module('ht.services', [])
    .service("htManager", manager)
    .service("htSorting", sorting);