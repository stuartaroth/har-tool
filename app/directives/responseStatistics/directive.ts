///<reference path="../../../typings/tsd.d.ts"/>

import responseStatisticsController = require('./controller');

export = ResponseStatisticsDirective;

class ResponseStatisticsDirective {
    restrict:string = 'E';
    controller:any = 'htResponseStatisticsController';
    controllerAs:string = 'ctrl';
    bindToController:boolean = true;
    templateUrl:string = './directives/responseStatistics/template.html';
    scope:any = {};

    static create() {
        return new ResponseStatisticsDirective();
    }
}