///<reference path="../../../typings/tsd.d.ts"/>

export = ChartSwitcherController;

class ChartSwitcherController {
    public chartType:number = null;
    public legend:boolean = false;

    public BAR:number = 0;
    public PIE:number = 1;
    public LINE:number = 2;
    public DOUGHNUT:number = 3;
    public POLAR_AREA:number = 4;

    public switch() {
        if(this.chartType == this.POLAR_AREA) {
            this.chartType = this.BAR;
        }
        else {
            this.chartType++;
        }
    }
}