///<reference path="../../../typings/tsd.d.ts"/>

import angular = require('angular');
import uploadDirective = require('./directive');
import uploadController = require('./controller');

export = angular.module('ht.upload', [])
    .controller('htUploadController', uploadController)
    .directive('htUpload', uploadDirective.create);