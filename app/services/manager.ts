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
        this.addHeaderStatistics(responseStatistics);
        this.statistics = responseStatistics;
    }

    private addHeaderStatistics(responseStatistics:any) {
        var headerMap = {};
        var entries = this.har.log.entries;
        for(var i = 0; i < entries.length; i++) {
            var headers = entries[i].response.headers;
            for(var j = 0; j < headers.length; j++) {
                var name = headers[j].name.toLowerCase();
                var value = headers[j].value.toLowerCase();
                this.mapToMap(headerMap, name);
                this.countToMap(headerMap[name], value);
            }
        }
        responseStatistics.headerMap = headerMap;
    }

    private mapToMap(map:any, item:string) {
        if(!map[item]) {
            map[item] = {};
        }
    }

    private countToMap(map:any, item:string) {
        if(map[item]) {
            map[item] += 1;
        }
        else {
            map[item] = 1;
        }
    }
}