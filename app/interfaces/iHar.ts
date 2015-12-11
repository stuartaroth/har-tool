import iEntry = require('./iEntry');

export = iHar;

interface iHar {
    log: {
        version: string;
        creator: any;
        pages: any[];
        entries: iEntry[];
    }
}