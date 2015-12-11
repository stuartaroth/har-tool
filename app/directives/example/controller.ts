///<reference path="../../../typings/tsd.d.ts"/>

export = ExampleController;

class ExampleController {
    field:string = null;

    static $inject = [
        'htExampleService'
    ];

    constructor(
        htExampleService
    ) {
        this.field = htExampleService.helloWorld();
        console.log(this.field);
    }
}