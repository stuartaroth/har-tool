///<reference path="../../../typings/tsd.d.ts"/>

export = ChartSwitcherController;

class ChartSwitcherController {
    public barChart:boolean = true;
    public toggle() {
        this.barChart = !this.barChart;
    }
}