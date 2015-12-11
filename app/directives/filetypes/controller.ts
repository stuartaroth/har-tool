///<reference path="../../../typings/tsd.d.ts"/>

export = FiletypesController;

class FiletypesController {
    static $inject = [
        '$scope',
        'htManager'
    ];

    constructor(
        $scope,
        public htManager
    ) {
        var unwatch = $scope.$watch('ctrl.htManager.har', (newVal) => {
            if(newVal) {
                this.getFiletypeStats();
                unwatch();
            }
        });
    }

    public stats = null;

    public getFiletypeStats() {
        var array = [];
        var requests = this.htManager.har.log.entries;
        for(var i = 0; i < requests.length; i++) {
            array.push(requests[i].request.url);
        }
        this.stats = array;
    }
}