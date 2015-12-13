///<reference path="../../../typings/tsd.d.ts"/>

import iHar = require('../../interfaces/iHar');
import iEntry = require('../../interfaces/iEntry');
import iResponse = require('../../interfaces/iResponse');
import iListItem = require('../../interfaces/iListItem');
import iChartInfo = require('../../interfaces/iChartInfo');

export = ResponseStatisticsController;

class ResponseStatisticsController {
    public responses = null;

    public mimeTypesByCount:iChartInfo = null;
    public mimeTypesBySize:iChartInfo = null;
    public statusByCount:iChartInfo = null;

    static $inject = [
        'htManager',
        'htSorting'
    ];

    constructor(
        public htManager,
        public htSorting
    ) {
        this.responses = this.getResponses(htManager.har);
        this.setMimeTypes();
    }

    public getResponses(har:iHar) {
        var responses = [];
        _.each(har.log.entries, (entry:iEntry) => {
            responses.push(entry.response);
        });
        return responses;
    }

    public setMimeTypes() {
        var countMap:any = {};
        var sizeMap:any = {};
        var statusMap:any = {};

        _.each(this.responses, (response:iResponse) => {
            this.htSorting.mapKeyCount(countMap, response.content.mimeType);
            this.addSizeMap(sizeMap, response);
            this.htSorting.mapKeyCount(statusMap, response.status);
        });

        this.mimeTypesByCount = this.htSorting.getChartInfo(countMap, '');
        this.mimeTypesBySize = this.htSorting.getChartInfo(sizeMap, '');
        this.statusByCount = this.htSorting.getChartInfo(statusMap, '');
    }

    public addSizeMap(map:any, response:iResponse) {
        if(map[response.content.mimeType]) {
            map[response.content.mimeType] += response.content.size;
        }
        else {
            map[response.content.mimeType] = response.content.size;
        }
    }
}