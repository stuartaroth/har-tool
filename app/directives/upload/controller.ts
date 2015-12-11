///<reference path="../../../typings/tsd.d.ts"/>

export = UploadController;

class UploadController {
    public file = null;
    public reader = new FileReader();
    public readHar() {
        this.reader.readAsText(this.file)
    }
    public check() {

    }

    static $inject = [
        '$scope',
        '$element',
        'htManager'
    ];

    constructor(
        $scope,
        $element,
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
        };

        self.check = () => {
            console.log(self.htManager.getHar());
        };
    }
}