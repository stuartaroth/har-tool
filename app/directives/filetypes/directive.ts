///<reference path="../../../typings/tsd.d.ts"/>

import filetypesController = require('./controller');

export = FiletypesDirective;

class FiletypesDirective {
    restrict:string = 'E';
    controller:any = 'htFiletypesController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/filetypes/template.html';
    scope:any = {};

    static create() {
        return new FiletypesDirective();
    }
}