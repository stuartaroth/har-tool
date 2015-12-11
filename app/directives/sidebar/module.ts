///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import sidebarDirective = require('./directive');
import sidebarController = require('./controller');

export = angular.module('ht.sidebar', [])
    .controller('htSidebarController', sidebarController)
    .directive('htSidebar', sidebarDirective.create);