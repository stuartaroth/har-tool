import iHeader = require('./iHeader');

export = iRequest;

interface iRequest {
    method: string;
    url: string;
    httpVersion: string;
    headers: iHeader[];
    queryString: any[];
    cookies: any[];
    headersSize: number;
    bodySize: number;
}