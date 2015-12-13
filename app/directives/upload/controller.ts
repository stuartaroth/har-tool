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
            var heyo = onLoadEvent.srcElement.result;
            self.htManager.setHar(heyo);
            $window.location.href = "/#/main";
        };
    }
}