///<reference path="../../../typings/tsd.d.ts"/>

import exampleController = require('./controller');

export = SidebarDirective;

class SidebarDirective {
    restrict:string = 'E';
    controller:any = 'htSidebarController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/sidebar/template.html';
    scope:any = {};

    static create() {
        return new SidebarDirective();
    }
}