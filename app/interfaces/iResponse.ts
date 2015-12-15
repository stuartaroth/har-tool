import iHeader = require('./iHeader');
import iContent = require('./iContent');

export = iResponse;

interface iResponse {
    status: number;
    statusText: string;
    httpVersion: string;
    headers: iHeader[];
    cookies: any[];
    content: iContent;
    bodySize: number;
}