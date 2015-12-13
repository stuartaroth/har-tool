///<reference path="../../../typings/tsd.d.ts"/>

export = MainController;

class MainController {
    static $inject = [
        '$window',
        'htManager'
    ];

    constructor(
        private $window,
        public htManager
    ) {
        if(!htManager.har) {
            $window.location.href = "/#/upload";
        }
    }
}