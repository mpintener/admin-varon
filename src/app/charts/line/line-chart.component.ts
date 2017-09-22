import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'line-chart',
	templateUrl: './line-chart.component.html',
	providers: [ChartService]
})
export class LineChartComponent implements OnInit{
	// lineChart
	public lineChartData:Array<any> = [];
	public lineChartLabels:Array<any> = [];
	public lineChartType:string = 'line';
	public subscription: Subscription;
	public data;

	public chartHovered(e:any):void {
		console.log(e);
	}

	constructor(
		private _chartService: ChartService
	){}

	ngOnInit(){
		this.data = this._chartService.getLineChartData();
		this.lineChartData = this.data.data;
		this.lineChartLabels = this.data.labels;
	}

}