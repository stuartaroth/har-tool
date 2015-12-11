///<reference path="../../../typings/tsd.d.ts"/>

export = UploadController;

class UploadController {
    public reader = new FileReader();
    public readHar = (file:any) => {
        this.reader.readAsText(file)
    };

    static $inject = [
        'htManager'
    ];

    constructor(
        htManager
    ) {
        this.reader.onload = (onLoadEvent:any) => {
            console.log(onLoadEvent.srcElement.result);
        };
    }
}