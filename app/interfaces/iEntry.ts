import iRequest = require('./iRequest');
import iResponse = require('./iResponse');

export = iEntry;

interface iEntry {
    startedDateTime: any;
    time: any;
    request: iRequest;
    response: iResponse;
}