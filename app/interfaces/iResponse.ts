import iHeader = require('./iHeader');

export = iResponse;

interface iResponse {
    status: number;
    statusText: string;
    httpVersion: string;
    headers: iHeader[];
    cookies: any[];
}