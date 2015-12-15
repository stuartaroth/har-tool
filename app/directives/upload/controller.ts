///<reference path="../../../typings/tsd.d.ts"/>

export = UploadController;

class UploadController {
    public file = null;
    public reader = new FileReader();
    public readHar() {
        this.reader.readAsText(this.file)
    }

    static $inject = [
        '$window',
        '$element',
        'htManager'
    ];

    constructor(
        private $window,
        private $element,
        public htManager
    ) {
        var self = this;
        $element.bind("change", function(e){
            self.file = (e.srcElement || e.target).files[0];
            self.readHar();
        });

        self.reader.onload = (onLoadEvent:any) => {
            self.htManager.setHar(onLoadEvent.srcElement.result);
            if(self.htManager.getHar()) {
                $window.location.href = "/#/statistics";
            }
        };
    }
}