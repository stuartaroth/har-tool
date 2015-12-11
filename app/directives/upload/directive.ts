///<reference path="../../../typings/tsd.d.ts"/>

import uploadController = require('./controller');

export = UploadDirective;

class UploadDirective {
    restrict:string = 'E';
    controller:any = 'htUploadController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/upload/template.html';
    scope:any = {};

    static create() {
        return new UploadDirective();
    }
}