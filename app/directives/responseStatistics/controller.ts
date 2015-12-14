///<reference path="../../../typings/tsd.d.ts"/>

import iHar = require('../../interfaces/iHar');
import iEntry = require('../../interfaces/iEntry');
import iResponse = require('../../interfaces/iResponse');
import iListItem = require('../../interfaces/iListItem');
import iChartInfo = require('../../interfaces/iChartInfo');

export = ResponseStatisticsController;

class ResponseStatisticsController {
    public responses = null;

    public mimeTypesByCountHeader:string = 'Number of Content Types Received';
    public mimeTypesByCount:iChartInfo = null;

    public mimeTypesBySizeHeader:string = 'Size (bytes) of Content Types Received';
    public mimeTypesBySize:iChartInfo = null;

    public statusByCountHeader:string = 'HTTP Statuses Received';
    public statusByCount:iChartInfo = null;

    public mimeTypesByTotalTimeHeader:string = 'Total Time for Content Types Received';
    public mimeTypesByTotalTime:iChartInfo = null;

    public mimeTypesByAverageTimeHeader:string = 'Average Time for Content Types Received';
    public mimeTypesByAverageTime:iChartInfo = null;


    static $inject = [
        'htManager',
        'htSorting'
    ];

    constructor(
        public htManager,
        public htSorting
    ) {
        this.getStatistics();
    }


    public getStatistics() {
        var countMap:any = {};
        var sizeMap:any = {};
        var statusMap:any = {};
        var totalTime:any = {};
        var averageTime:any = {};

        _.each(this.htManager.har.log.entries, (entry:iEntry) => {
            this.htSorting.mapKeyCount(countMap, entry.response.content.mimeType);
            this.addSizeMap(sizeMap, entry.response);
            this.htSorting.mapKeyCount(statusMap, entry.response.status + " - " + entry.response.statusText);
            this.addTotalTime(totalTime, entry);
        });
        this.getAverageTime(totalTime, countMap, averageTime);

        this.mimeTypesByCount = this.htSorting.getChartInfo(countMap, '');
        this.mimeTypesBySize = this.htSorting.getChartInfo(sizeMap, '');
        this.statusByCount = this.htSorting.getChartInfo(statusMap, '');
        this.mimeTypesByTotalTime = this.htSorting.getChartInfo(totalTime, '');
        this.mimeTypesByAverageTime = this.htSorting.getChartInfo(averageTime, '');
    }

    public addSizeMap(map:any, response:iResponse) {
        if(map[response.content.mimeType]) {
            map[response.content.mimeType] += response.content.size;
        }
        else {
            map[response.content.mimeType] = response.content.size;
        }
    }

    public addTotalTime(map:any, entry:iEntry) {
        if(map[entry.response.content.mimeType]) {
            map[entry.response.content.mimeType] += entry.time;
        }
        else {
            map[entry.response.content.mimeType] = entry.time;
        }
    }

    public getAverageTime(totalTime, countMap, averageTime) {
        _.each(totalTime, (value:number, key:string) => {
            averageTime[key] = value / countMap[key];
        });
    }
}