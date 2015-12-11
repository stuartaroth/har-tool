///<reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');
import sidebar = require('./sidebar/module');
import topbar = require('./topbar/module');
import upload = require('./upload/module');
import filetypes = require('./filetypes/module');

export = angular.module('ht.directives', [
    sidebar.name,
    topbar.name,
    upload.name,
    filetypes.name
]);