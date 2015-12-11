///<reference path="../../typings/tsd.d.ts"/>

export = Manager;

class Manager {
    private har:any = null;

    public getHar() {
        return this.har;
    }

    public setHar(fileContent:string) {
        this.har = this.parseHar(fileContent);
    }

    private parseHar(fileContent:string) {
        try {
            return JSON.parse(fileContent);
        }
        catch(exception) {
            return null;
        }
    }
}