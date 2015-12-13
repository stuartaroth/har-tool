///<reference path="../../../typings/tsd.d.ts"/>

import mainController = require('./controller');

export = MainDirective;

class MainDirective {
    restrict:string = 'E';
    controller:any = 'htMainController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/main/template.html';
    scope:any = {};

    static create() {
        return new MainDirective();
    }
}