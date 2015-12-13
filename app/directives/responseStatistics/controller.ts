///<reference path="../../../typings/tsd.d.ts"/>

import iHar = require('../../interfaces/iHar');
import iEntry = require('../../interfaces/iEntry');

export = ResponseStatisticsController;

class ResponseStatisticsController {
    public responses = null;
    public labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public series = ['Series A', 'Series B'];
    public data = [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]];

    static $inject = [
        'htManager'
    ];

    constructor(
        public htManager
    ) {
        console.log(require.defined("chart"));
        console.log(require.defined("angular-chart"));
        this.responses = this.getResponses(htManager.har);
    }

    public getResponses(har:iHar) {
        var responses = [];
        _.each(har.log.entries, (entry:iEntry) => {
            responses.push(entry.response);
        });
        console.log(responses);
        return responses;
    }
}