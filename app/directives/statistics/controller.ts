///<reference path="../../../typings/tsd.d.ts"/>

import iHar = require('../../interfaces/iHar');
import iEntry = require('../../interfaces/iEntry');
import iResponse = require('../../interfaces/iResponse');
import iListItem = require('../../interfaces/iListItem');
import iChartInfo = require('../../interfaces/iChartInfo');

export = StatisticsController;

class StatisticsController {
    public responses = null;

    public mimeTypesByCountHeader:string = 'Number of Content Types Received';
    public mimeTypesByCount:iChartInfo = null;

    public mimeTypesBySizeHeader:string = 'Size (bytes) of Content Types Received';
    public mimeTypesBySize:iChartInfo = null;

    public statusByCountHeader:string = 'HTTP Statuses Received';
    public statusByCount:iChartInfo = null;

    public longestTimesHeader:string = 'URLs by Longest Time to Load';
    public longestTimes:iChartInfo = null;

    static $inject = [
        '$window',
        'htManager',
        'htSorting'
    ];

    constructor(
        public $window,
        public htManager,
        public htSorting
    ) {
        if(!htManager.har) {
            $window.location.href = "/#/upload";
        }
        else {
            this.getStatistics();
        }
    }


    public getStatistics() {
        var countMap:any = {};
        var sizeMap:any = {};
        var statusMap:any = {};
        var longestTime:any = {};

        _.each(this.htManager.har.log.entries, (entry:iEntry) => {
            this.htSorting.mapKeyCount(countMap, entry.response.content.mimeType);
            this.addSizeMap(sizeMap, entry.response);
            this.htSorting.mapKeyCount(statusMap, entry.response.status + " - " + entry.response.statusText);
            this.addLongestTime(longestTime, entry)
        });

        this.mimeTypesByCount = this.htSorting.getChartInfo(countMap, '');
        this.mimeTypesBySize = this.htSorting.getChartInfo(sizeMap, '');
        this.statusByCount = this.htSorting.getChartInfo(statusMap, '');
        this.longestTimes = this.htSorting.getChartInfo(longestTime, '');
        this.longestTimes.data[0]  = this.longestTimes.data[0].slice(0, 10);
        this.longestTimes.labels = this.longestTimes.labels.slice(0, 10);
    }

    public addLongestTime(longestTime, entry:iEntry) {
        longestTime[entry.request.url] = entry.time;
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