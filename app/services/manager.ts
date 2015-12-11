///<reference path="../../typings/tsd.d.ts"/>

import iHar = require('../interfaces/iHar');

export = Manager;

class Manager {
    private har:iHar = null;
    public statistics:any = null;

    public getHar() {
        return this.har;
    }

    public setHar(fileContent:string) {
        this.har = this.parseHar(fileContent);
        if(this.har) {
            this.calculateStatistics();
        }
    }

    private parseHar(fileContent:string):iHar {
        try {
            return JSON.parse(fileContent);
        }
        catch(exception) {
            return null;
        }
    }

    private calculateStatistics() {
        var responseStatistics = {};
        this.addContentType(responseStatistics);
        this.statistics = responseStatistics;
    }

    private addContentType(responseStatistics:any) {
        var contentTypeMap = {};
        var entries = this.har.log.entries;
        for(var i = 0; i < entries.length; i++) {
            var headers = entries[i].response.headers;
            for(var j = 0; j < headers.length; j++) {
                if(headers[j].name.toLowerCase() == "content-type") {
                    this.addToMap(contentTypeMap, headers[j].value);
                }
            }
        }
        responseStatistics.contentTypeMap = contentTypeMap;
    }

    private addToMap(map:any, item:string) {
        if(map[item]) {
            map[item] += 1;
        }
        else {
            console.log("wait here");
            map[item] = 1;
        }
    }
}