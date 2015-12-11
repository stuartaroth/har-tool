///<reference path="../../typings/tsd.d.ts"/>

import iHar = require('../interfaces/iHar');

export = Manager;

class Manager {
    private har:iHar = null;

    public getHar() {
        return this.har;
    }

    public setHar(fileContent:string) {
        this.har = this.parseHar(fileContent);
    }

    private parseHar(fileContent:string):iHar {
        try {
            return JSON.parse(fileContent);
        }
        catch(exception) {
            return null;
        }
    }
}