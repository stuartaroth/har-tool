///<reference path="../../../typings/tsd.d.ts"/>

import exampleController = require('./controller');

export = TopbarDirective;

class TopbarDirective {
    restrict:string = 'E';
    controller:any = 'htTopbarController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/topbar/template.html';
    scope:any = {};

    static create() {
        return new TopbarDirective();
    }
}