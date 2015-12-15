///<reference path="../../../typings/tsd.d.ts"/>

import iHar = require('../../interfaces/iHar');
import iEntry = require('../../interfaces/iEntry');
import iResponse = require('../../interfaces/iResponse');
import iListItem = require('../../interfaces/iListItem');
import iChartInfo = require('../../interfaces/iChartInfo');

export = StatisticsController;

class StatisticsController {
    public responses = null;

    public mimeTypesByCountHeader:string = 'Content Type by Count Received';
    public mimeTypesByCount:iChartInfo = null;

    public mimeTypesBySizeHeader:string = 'Content Type by Total Size Received';
    public mimeTypesBySize:iChartInfo = null;

    public statusByCountHeader:string = 'HTTP Statuses by Count Received';
    public statusByCount:iChartInfo = null;

    public longestTimesHeader:string = 'Top 10 Longest Requests by Url';
    public longestTimes:iChartInfo = null;

    public sizeOverTimeHeader:string = 'Response Sizes (Chronological Order)';
    public sizeOverTime:iChartInfo = {data:[[], []], labels:[], series: ['Original Body Size', 'Compressed Body Size']};

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
        var size = [];
        var entries = [];

        _.each(this.htManager.har.log.entries, (entry:iEntry, index:number) => {
            this.htSorting.mapKeyCount(countMap, entry.response.content.mimeType);
            this.addSizeMap(sizeMap, entry.response);
            this.htSorting.mapKeyCount(statusMap, entry.response.status + " - " + entry.response.statusText);
            this.addLongestTime(longestTime, entry);
            this.addSizeOverTime(entry);
        });

        this.mimeTypesByCount = this.htSorting.getChartInfo(countMap, '');
        this.mimeTypesBySize = this.htSorting.getChartInfo(sizeMap, '');
        this.statusByCount = this.htSorting.getChartInfo(statusMap, '');
        this.longestTimes = this.htSorting.getChartInfo(longestTime, '');
        this.longestTimes.data[0]  = this.longestTimes.data[0].slice(0, 10);
        this.longestTimes.labels = this.longestTimes.labels.slice(0, 10);
    }

    public addSizeOverTime(entry:iEntry) {
        this.sizeOverTime.data[0].push(entry.response.content.size);
        this.sizeOverTime.data[1].push(entry.response.bodySize);
        this.sizeOverTime.labels.push(entry.response.content.mimeType);
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