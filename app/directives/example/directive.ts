///<reference path="../../../typings/tsd.d.ts"/>

import exampleController = require('./controller');

export = ExampleDirective;

class ExampleDirective {
    restrict:string = 'E';
    controller:any = 'htExampleController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/example/template.html';
    scope:any = {};

    static create() {
        return new ExampleDirective();
    }
}